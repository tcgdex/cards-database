import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Eevee",
		fr: "Évoli",
		de: "Evoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		'es-mx': "Eevee"
	},

	illustrator: "UKUMO uiti",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Nap",
			fr: "Tit'Sieste",
			de: "Nickerchen",
			es: "Siesta",
			it: "Pausa",
			pt: "Soneca",
			'es-mx': "Siesta"
		},

		effect: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts de ce Pokémon.",
			de: "Heile 20 Schadenspunkte bei diesem Pokémon.",
			es: "Cura 20 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 20 danni.",
			pt: "Cure 20 pontos de dano deste Pokémon.",
			'es-mx': "Cura 20 puntos de daño a este Pokémon."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			de: "Kopfnuss",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			pt: "Cabeçada",
			'es-mx': "Golpe Cabeza"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 726539,
				cardmarket: 918906
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 726539,
				cardmarket: 918906
			}
		}
	],
}

export default card