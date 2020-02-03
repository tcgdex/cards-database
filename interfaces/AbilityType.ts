enum AbilityType {
	POKEBODY,
	POKEPOWER,
	TALENT,
	ANCIENTTRAIT
}

namespace AbilityType {
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
