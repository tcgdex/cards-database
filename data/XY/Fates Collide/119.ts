import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Umbreon EX",
		fr: "Noctali EX",
		es: "Umbreon EX",
		it: "Umbreon EX",
		pt: "Umbreon EX",
		de: "Nachtara EX"
	},

	illustrator: "Ryo Ueda",
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
				en: "Veil of Darkness",
				fr: "Voile des Ténèbres",
				es: "Velo Oscuro",
				it: "Velo Oscuro",
				pt: "Véu da Escuridão",
				de: "Schleier der Dunkelheit"
			},
			effect: {
				en: "Discard as many cards as you like from your hand. Then, draw that many cards.",
				fr: "Défaussez autant de cartes que vous voulez de votre main. Ensuite, piochez autant de cartes.",
				es: "Descarta tantas cartas como quieras de tu mano. Después, roba ese mismo número de cartas.",
				it: "Scarta tutte le carte che vuoi dalla tua mano. Poi pesca lo stesso numero di carte.",
				pt: "Descarte tantos cards quanto desejar da sua mão. Em seguida, compre esse mesmo número de cards.",
				de: "Lege beliebig viele Karten von deiner Hand auf deinen Ablagestapel. Ziehe anschließend dieselbe Anzahl Karten."
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
				en: "Endgame",
				fr: "Phase Finale",
				es: "Momentos Finales",
				it: "Finegioco",
				pt: "Momentos Finais",
				de: "Endphase"
			},
			effect: {
				en: "If your opponent's Mega Evolution Pokémon is Knocked Out by damage from this attack, take 2 more Prize cards.",
				fr: "Si le Pokémon Méga-Évolution de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez 2 cartes Récompense supplémentaires.",
				es: "Si el Pokémon Megaevolución de tu rival queda Fuera de Combate por el daño de este ataque, coge 2 cartas de Premio más.",
				it: "Se un Pokémon Megaevoluzione del tuo avversario viene messo KO dai danni di questo attacco, prendi due carte Premio in più.",
				pt: "Se o Pokémon de Megaevolução do seu oponente for Nocauteado por danos causados por este ataque, pegue mais 2 cards de Prêmio.",
				de: "Wenn das Mega-Entwicklungs-Pokémon deines Gegners durch Schaden dieses Angriffs kampfunfähig wird, nimm 2 zusätzliche Preiskarten."
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
		cardmarket: 289876
	}
}

export default card
