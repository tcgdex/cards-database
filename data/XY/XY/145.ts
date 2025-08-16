import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Skarmory EX",
		fr: "Airmure EX",
		es: "Skarmory EX",
		it: "Skarmory EX",
		pt: "Skarmory EX",
		de: "Panzaeron EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		227,
	],

	hp: 170,

	types: [
		"Metal",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Joust",
				fr: "Joute",
				es: "Justa",
				it: "Giostra",
				pt: "Justar",
				de: "Lanzenstich"
			},
			effect: {
				en: "Before doing damage, discard all Pokémon Tool cards attached to your opponent's Active Pokémon.",
				fr: "Avant d'infliger des dégâts, défaussez toutes les cartes Outil Pokémon attachées au Pokémon Actif de votre adversaire.",
				es: "Antes de infligir daño, descarta todas las cartas de Herramienta Pokémon unidas al Pokémon Activo de tu rival.",
				it: "Prima di infliggere il danno, scarta tutte le carte Oggetto Pokémon assegnate al Pokémon attivo del tuo avversario.",
				pt: "Antes de causar danos, descarte todos os cards de Ferramenta Pokémon ligados ao Pokémon Ativo do seu oponente.",
				de: "Lege, bevor du Schaden zufügst, alle an das Aktive Pokémon deines Gegners angelegten Pokémon-Ausrüstungen auf den Ablagestapel deines Gegners."
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Tailspin Piledriver",
				fr: "Vrille Incontrôlable",
				es: "Martinete en Picado",
				it: "Avvitamento Schiacciante",
				pt: "Bate Estaca de Cauda",
				de: "Überkopfabservierer"
			},
			effect: {
				en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 40 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 40 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 40 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario ha dei segnalini danno, questo attacco infligge 40 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente já possuir contadores de danos, esse ataque causará 40 de danos adicionais.",
				de: "Wenn auf dem Aktiven Pokémon deines Gegners bereits mindestens 1 Schadensmarke liegt, fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,
	stage: "Basic",

	thirdParty: {
		cardmarket: 281417,
		tcgplayer: 89249
	}
}

export default card
