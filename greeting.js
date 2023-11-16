function greet (name) {
  let language = 'en'
  if (name === null || name === undefined || name === '') {
    return 'Hello, my friend.'
  }

  if (Array.isArray(name) && name.length >= 2) {
    if (
      name[name.length - 1] === 'fr' ||
            name[name.length - 1] === 'en' ||
            name[name.length - 1] === 'nl'
    ) {
      language = name.pop()
      if (name.length === 1) {
        return greetWithLanguage(name, language)
      }
    }
    const sortedNames = sortArray(name)
    let out = lowerNames(sortedNames[0], language)
    if (sortedNames[1].length > 0) {
      out += upperNames(sortedNames[1], language)
    }
    return out
  }

  if (name === name.toUpperCase()) return 'HELLO, ' + name + '!'

  return 'Hello, ' + name + '.'
}
function sortArray (name) {
  const lowerCaseNames = []
  const upperCaseNames = []
  for (const value of name) {
    if (value === value.toUpperCase()) upperCaseNames.push(value)
    else lowerCaseNames.push(value)
  }
  return [lowerCaseNames, upperCaseNames]
}

function lowerNames (names, language) {
  let words = []
  if (language !== undefined) words = selectLanguage(language)
  let out = `${words[0]}, `
  for (let i = 0; i < names.length; i++) {
    out += names[i]
    if (i === names.length - 2) {
      out += ` ${words[1]} ${names[i + 1]}`
      break
    } else out += ', '
  }
  out += '.'
  return out
}

function upperNames (names, language) {
  let words = ['HELLO', 'AND']
  if (language !== undefined) words = selectLanguage(language)
  let out = ` ${words[1].toUpperCase()} ${words[0].toUpperCase()} `
  for (let i = 0; i < names.length; i++) {
    out += names[i]
  }
  out += ' !'
  return out
}

function selectLanguage (language) {
  if (language === 'en') return ['Hello', 'and']
  else if (language === 'fr') return ['Bonjour', 'et']
  else if (language === 'nl') return ['Hallo', 'en']
}

function greetWithLanguage (name, language) {
  if (language === 'en') return `Hello, ${name}.`
  else if (language === 'fr') return `Bonjour, ${name}.`
  else if (language === 'nl') return `Hallo, ${name}.`
}

module.exports = greet
