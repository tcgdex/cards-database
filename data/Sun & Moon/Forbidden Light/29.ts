import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Bergmite",
		fr: "Grelaçon",
		es: "Bergmite",
		it: "Bergmite",
		pt: "Bergmite",
		de: "Arktip"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		712,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Break Open",
				fr: "Fracturer",
				es: "Rajar",
				it: "Frattura",
				pt: "Partir ao Meio",
				de: "Aufbrechen"
			},
			effect: {
				en: "If your opponent has a Stadium card in play, discard it. If you do, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Si votre adversaire a une carte Stade en jeu, défaussez-la. Dans ce cas, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Si tu rival tiene alguna carta de Estadio en juego, descártala. Si lo haces, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Se il tuo avversario ha una carta Stadio in gioco, scartala. Se lo fai, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Se o seu oponente tiver uma carta de Estádio em jogo, descarte-a. Se fizer isto, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wenn dein Gegner eine Stadionkarte im Spiel hat, lege sie auf seinen Ablagestapel. Wenn du das machst, ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 355548
	}
}

export default card
