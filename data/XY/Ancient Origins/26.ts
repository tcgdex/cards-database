import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Jolteon",
		fr: "Voltali",
		es: "Jolteon",
		it: "Jolteon",
		pt: "Jolteon",
		de: "Blitza"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		135,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Electric Effect",
				fr: "Effet Électrique",
				es: "Efecto Eléctrico",
				it: "Elettreffetto",
				pt: "Efeito Elétrico",
				de: "Elektro-Effekt"
			},
			effect: {
				en: "Each of your Stage 1 Pokémon in play is now a Lightning Pokémon in addition to its existing types.",
				fr: "Chacun de vos Pokémon de Niveau 1 en jeu est maintenant un Pokémon Lightning en plus de ses types existants.",
				es: "Cada uno de tus Pokémon de Fase 1 en juego pasa a ser un Pokémon Lightning además de sus tipos actuales.",
				it: "Ciascuno dei tuoi Pokémon di Fase 1 in gioco diventa di tipo Lightning in aggiunta ai suoi tipi originari.",
				pt: "Cada um dos seus Pokémon Estágio 1 em jogo é agora um Pokémon Lightning, além dos seus tipos existentes.",
				de: "Jedes deiner Phase-1-Pokémon im Spiel ist jetzt zusätzlich zu seinen bereits vorhandenen Typen ein Lightning-Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thunder Blast",
				fr: "Grondement de Tonnerre",
				es: "Estallido Trueno",
				it: "Tuonobomba",
				pt: "Explosão de Trovões",
				de: "Donnerkeil"
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
				es: "Descarta 1 Energía unida a este Pokémon.",
				it: "Scarta un'Energia assegnata a questo Pokémon.",
				pt: "Descarte uma Energia ligada a este Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 284207,
		tcgplayer: 101447
	}
}

export default card
