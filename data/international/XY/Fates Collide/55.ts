import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Umbreon EX",
		'fr-fr': "Noctali EX",
		'es-es': "Umbreon EX",
		'it-it': "Umbreon EX",
		'pt-br': "Umbreon EX",
		'de-de': "Nachtara EX"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		197,
	],

	hp: 170,

	types: [
		"Darkness",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Veil of Darkness",
				'fr-fr': "Voile des Ténèbres",
				'es-es': "Velo Oscuro",
				'it-it': "Velo Oscuro",
				'pt-br': "Véu da Escuridão",
				'de-de': "Schleier der Dunkelheit"
			},
			effect: {
				'en-us': "Discard as many cards as you like from your hand. Then, draw that many cards.",
				'fr-fr': "Défaussez autant de cartes que vous voulez de votre main. Ensuite, piochez autant de cartes.",
				'es-es': "Descarta tantas cartas como quieras de tu mano. Después, roba ese mismo número de cartas.",
				'it-it': "Scarta tutte le carte che vuoi dalla tua mano. Poi pesca lo stesso numero di carte.",
				'pt-br': "Descarte tantos cards quanto desejar da sua mão. Em seguida, compre esse mesmo número de cards.",
				'de-de': "Lege beliebig viele Karten von deiner Hand auf deinen Ablagestapel. Ziehe anschließend dieselbe Anzahl Karten."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Endgame",
				'fr-fr': "Phase Finale",
				'es-es': "Momentos Finales",
				'it-it': "Finegioco",
				'pt-br': "Momentos Finais",
				'de-de': "Endphase"
			},
			effect: {
				'en-us': "If your opponent's Mega Evolution Pokémon is Knocked Out by damage from this attack, take 2 more Prize cards.",
				'fr-fr': "Si le Pokémon Méga-Évolution de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez 2 cartes Récompense supplémentaires.",
				'es-es': "Si el Pokémon Megaevolución de tu rival queda Fuera de Combate por el daño de este ataque, coge 2 cartas de Premio más.",
				'it-it': "Se un Pokémon Megaevoluzione del tuo avversario viene messo KO dai danni di questo attacco, prendi due carte Premio in più.",
				'pt-br': "Se o Pokémon de Megaevolução do seu oponente for Nocauteado por danos causados por este ataque, pegue mais 2 cards de Prêmio.",
				'de-de': "Wenn das Mega-Entwicklungs-Pokémon deines Gegners durch Schaden dieses Angriffs kampfunfähig wird, nimm 2 zusätzliche Preiskarten."
			},
			damage: 70,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,
	stage: "Basic",

	thirdParty: {
		cardmarket: 289876,
		tcgplayer: 117812
	}
}

export default card
