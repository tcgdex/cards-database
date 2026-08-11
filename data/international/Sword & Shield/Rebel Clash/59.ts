import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [466],

	name: {
		'en-us': "Electivire",
		'fr-fr': "Élekable",
		'es-es': "Electivire",
		'it-it': "Electivire",
		'pt-br': "Electivire",
		'de-de': "Elevoltek"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Electabuzz",
		'fr-fr': "Élektek",
		'es-es': "Electabuzz",
		'it-it': "Electabuzz",
		'pt-br': "Electabuzz",
		'de-de': "Elektek"
	},

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunder Shock",
				'fr-fr': "Éclair",
				'es-es': "Impactrueno",
				'it-it': "Tuonoshock",
				'pt-br': "Trovoada de Choques",
				'de-de': "Donnerschock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 50,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Electrified Bolt",
				'fr-fr': "Foudre Électrifiée",
				'es-es': "Rayo Electrificado",
				'it-it': "Lampo Caricato",
				'pt-br': "Raio Eletrificado",
				'de-de': "Hochspannungsblitz"
			},
			effect: {
				'en-us': "If this Pokémon has any Special Energy attached, this attack does 90 more damage.",
				'fr-fr': "Si de l'Énergie spéciale est attachée à ce Pokémon, cette attaque inflige 90 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene alguna Energía Especial unida a él, este ataque hace 90 puntos de daño más.",
				'it-it': "Se questo Pokémon ha delle Energie speciali assegnate, questo attacco infligge 90 danni in più.",
				'pt-br': "Se este Pokémon tiver alguma Energia Especial ligada a ele, este ataque causará 90 pontos de dano a mais.",
				'de-de': "Wenn an dieses Pokémon mindestens 1 Spezial-Energie angelegt ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "90+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 140,
	types: ["Lightning"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "A single Electivire can provide enough electricity for all the buildings in a big city for a year."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457728,
				tcgplayer: 213140
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457728,
				tcgplayer: 213140
			}
		},
	],
}

export default card
