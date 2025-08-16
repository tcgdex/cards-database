import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Heatmor",
		fr: "Aflamanoir",
		es: "Heatmor",
		it: "Heatmor",
		pt: "Heatmor",
		de: "Furnifraß"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		631,
	],

	hp: 110,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Singe",
				fr: "Roussi",
				es: "Quemadura",
				it: "Scottata",
				pt: "Chamuscada",
				de: "Versengung"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
				it: "Il Pokémon attivo del tuo avversario viene bruciato.",
				pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Charring Breath",
				fr: "Souffle Incendiaire",
				es: "Aliento Incendiario",
				it: "Incenerespiro",
				pt: "Hálito Carbonizador",
				de: "Schwelender Atem"
			},
			effect: {
				en: "If your opponent’s Active Pokémon isn’t Burned, this attack does nothing.",
				fr: "Si le Pokémon Actif de votre adversaire n’est pas Brûlé, cette attaque ne fait rien.",
				es: "Si el Pokémon Activo de tu rival no está Quemado, este ataque no hace nada.",
				it: "Se il Pokémon attivo del tuo avversario non è bruciato, questo attacco non ha effetto.",
				pt: "Se o Pokémon Ativo do seu oponente não estiver Queimado, este ataque não fará nada.",
				de: "Wenn das Aktive Pokémon deines Gegners nicht verbrannt ist, hat diese Attacke keine Auswirkungen."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 363482,
		tcgplayer: 175312
	}
}

export default card
