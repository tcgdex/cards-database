import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [637],

	name: {
		en: "Volcarona",
		fr: "Pyrax",
		es: "Volcarona",
		it: "Volcarona",
		pt: "Volcarona",
		de: "Ramoth"
	},

	illustrator: "NC Empire",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Larvesta",
		fr: "Pyronille",
		es: "Larvesta",
		it: "Larvesta",
		pt: "Larvesta",
		de: "Ignivor"
	},

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Cauterize",
				fr: "Cautérisation",
				es: "Cauterizar",
				it: "Cauterizzazione",
				pt: "Cauterizar",
				de: "Kauterisieren"
			},
			effect: {
				en: "If your opponent's Active Pokémon has no damage counters on it before this attack does damage, this attack does nothing.",
				fr: "Si le Pokémon Actif de votre adversaire n'a aucun marqueur de dégâts avant que cette attaque n'inflige des dégâts, cette attaque ne fait rien.",
				es: "Si el Pokémon Activo de tu rival no tiene ningún contador de daño sobre él antes de que este ataque inflija daño, este ataque no hace nada.",
				it: "Se il Pokémon attivo del tuo avversario non ha segnalini danno prima che questo attacco infligga danni, questo attacco non ha effetto.",
				pt: "Se o Pokémon Ativo do seu oponente não tiver nenhum contador de dano nele antes deste ataque causar dano, este ataque não fará nada.",
				de: "Wenn auf dem Aktiven Pokémon deines Gegners keine Schadensmarken liegen, bevor diese Attacke Schaden zufügt, hat diese Attacke keine Auswirkungen."
			},
			damage: 80,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Wing",
				fr: "Aile de Feu",
				es: "Ala Ígnea",
				it: "Alafiamma",
				pt: "Asa de Fogo",
				de: "Feuerflügel"
			},

			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "According to legends, it was hatched from a flaming cocoon to save people and Pokémon that were suffering from the cold."
	},

	thirdParty: {
		cardmarket: 483024
	}
}

export default card
