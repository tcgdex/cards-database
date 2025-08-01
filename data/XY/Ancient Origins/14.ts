import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Entei",
		fr: "Entei",
		es: "Entei",
		it: "Entei",
		pt: "Entei",
		de: "Entei"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		244,
	],

	hp: 120,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Burning Roar",
				fr: "Rugissement Brûlant",
				es: "Rugido Ardiente",
				it: "Bruciaboato",
				pt: "Rugido Queimador",
				de: "Feuriger Brüller"
			},
			effect: {
				en: "Discard the top 4 cards of your deck. If any of those cards are Fire Energy cards, attach them to your Pokémon in any way you like.",
				fr: "Défaussez les 4 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie Fire, attachez-les à vos Pokémon, de la manière que vous voulez.",
				es: "Descarta las 4 primeras cartas de tu baraja. Si entre esas cartas hay cartas de Energía Fire, únelas a tus Pokémon de la manera que desees.",
				it: "Scarta le prime quattro carte del tuo mazzo. Se fra queste ci sono delle carte Energia Fire, assegnale a piacimento ai tuoi Pokémon.",
				pt: "Descarte os 4 cards de cima do seu baralho. Escolha quaisquer destes cards de Energia Fire e ligue-os aos seus Pokémon do jeito que desejar.",
				de: "Lege die obersten 4 Karten deines Decks auf deinen Ablagestapel. Wenn darunter Fire-Energiekarten sind, lege sie beliebig an deine Pokémon an."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Combat Blaze",
				fr: "Brasier de Combat",
				es: "Combate Explosivo",
				it: "Scontrardente",
				pt: "Fulgor de Combate",
				de: "Gefechtsbrand"
			},
			effect: {
				en: "This attack does 20 more damage for each of your opponent's Benched Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
				es: "Este ataque hace 20 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
				it: "Questo attacco infligge 20 danni in più per ogni Pokémon nella panchina del tuo avversario.",
				pt: "Este ataque causa 20 de danos adicionais a cada Pokémon no Banco do seu oponente.",
				de: "Dieser Angriff fügt 20 weitere Schadenspunkte für jedes Pokémon auf der Bank deines Gegners zu."
			},
			damage: "20+",

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
		cardmarket: 284195
	}
}

export default card
