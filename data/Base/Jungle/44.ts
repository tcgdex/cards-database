import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Rapidash",
		fr: "Galopa",
		it: "Rapidash",
		de: "Gallopa"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		78,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Ponyta",
		fr: "Ponyta",
		it: "Ponyta",
		de: "Ponita"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stomp",
				fr: "Écrasement",
				it: "Pestone",
				de: "Stampfer"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage; if tails, this attack does 20 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires ; si c'est pile, cette attaque inflige 20 dégâts.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni più 10 danni, se esce croce, causa solo 20 danni.",
				de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 20 Schadenspunkte plus 10 weitere Schadenspunkte zu; bei „Zahl“ fügt dieser Angriff 20 Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Agility",
				fr: "Hâte",
				it: "Agilità",
				de: "Agilität"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Rapidash.",
				fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaques, y compris les dégâts, infligés à Galopa.",
				it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario previeni tutti gli effetti degli attacchi inflitti a Rapidash, incluso il danno.",
				de: "Wirf eine Münze. Bei „Kopf“ verhindere während des nächsten gegnerischen Zuges alle Auswirkungen von Angriffen auf Gallopa (einschließlich der Schadenspunkte)."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		en: "Very competitive, this Pokémon will chase anything that moves fast in the hopes of racing it.",
		fr: "Doté d'un esprit de compétition, il poursuit toute créature rapide pour faire la course.",
		it: "Molto competitivo, questo Pokémon insegue tutto ciò che si muove velocemente, nella speranza di gareggiarci.",
		de: "Immer konkurrenzbereit jagt dieses Pokémon hinter jedem sich schnell bewegenden Objekt in der Hoffnung auf ein Rennen hinterher."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273841,
				tcgplayer: 45147
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273841,
				tcgplayer: 45147
			}
		}
	],
}

export default card
