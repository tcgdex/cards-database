enum AbilityType {
	POKEBODY,
	POKEPOWER,
	TALENT,
	ANCIENTTRAIT
}

const en = [
	"Poké-Body",
	"Poké-Power",
	"Ability",
	"Ancient Trait"
]

const fr = [
	"Poké-Body",
	"Poké-Power",
	"Talent",
	"Trait Ancien"
]

namespace AbilityType {

	export function toLang(a: AbilityType, lang: string): string {
		switch (lang) {
			case "en":
				return en[a]
			case "fr":
				return fr[a]
		}
		throw new Error(`Error , abilityType not translated! (${lang})`)
	}
	export function getFromText(txt: string): AbilityType {
		switch (txt) {
			case "Ability":

			case "Talent":
				return AbilityType.TALENT

			case "Poké-Body":
			case "Pok��-Body":
				return AbilityType.POKEBODY

			case "Poké-Power":
			case "Pokémon Power":
			case "Pok��-Power":
				return AbilityType.POKEPOWER

			case "Ancient Trait":

			case "Trait Antique":
				return AbilityType.ANCIENTTRAIT
			default:
				throw new Error(`Ability Type (${txt}) not found!`)
		}
	}
}

export default AbilityType
