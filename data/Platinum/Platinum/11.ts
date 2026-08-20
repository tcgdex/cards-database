import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Manectric",
		fr: "Élecsprint",
		de: "Voltenso"
	},

	illustrator: "Kouki Saitou",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [310],

	hp: 90,

	types: [
		"Lightning"
	],

	evolveFrom: {
		en: "Electrike",
		fr: "Dynavolt",
		de: "Frizelbliz"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Electric Barrier",
				fr: "Barrière électrique",
				de: "Elektrobarriere"
			},
			effect: {
				en: "Prevent all damage done to your Benched Pokémon (excluding any Manectric) by attacks.",
				fr: "Prévenez tous les dégâts infligés par des attaques à vos Pokémon de Banc (Elecsprint exclus).",
				de: "Verhindere allen Schaden, der Pokémon auf deiner Bank (außer allen Voltenso) durch Angriffe zugefügt wird."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Power Wave",
				fr: "Vague puissante",
				de: "Stromwelle"
			},
			effect: {
				en: "This attack does 30 damage to each Pokémon that has any Poké-Powers (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à chaque Pokémon possédant des Poké-Powers (les vôtres et ceux de votre adversaire). (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt jedem Pokémon (deinen und denen deines Gegners), das mindestens 1 Poké-Power hat, 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Attract Current",
				fr: "Courant électrique",
				de: "Stromanziehung"
			},
			effect: {
				en: "Search your deck for a Lightning Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte Énergie Lightning et attachez-la à 1 de vos Pokémon. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach 1 {L}-Energiekarte und lege sie an 1 deiner Pokémon an. Mische dein Deck danach."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	variants: [
		{
			type:"holo",
			thirdParty: {
				tcgplayer: 87162,
				cardmarket: 278432
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278432,
				tcgplayer: 87162
			}
		}
	],

	retreat: 0
}

export default card
