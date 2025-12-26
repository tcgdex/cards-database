import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Poliwhirl",
		fr: "Têtarte",
		de: "Quaputzi",
		it: "Poliwhirl"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		61,
	],

	hp: 60,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Poliwag",
		it: "Poliwag"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Amnesia",
				fr: "Amnésie",
				de: "Amnesie",
				it: "Amnesia"
			},
			effect: {
				en: "Choose 1 of defenders attacks. Defender cannot use that attack next turn.",
				fr: "Choisissez 1 des attaques du Pokémon Défenseur. Ce Pokémon ne peut pas utiliser cette attaque pendant le prochain tour de votre adversaire.",
				de: "Wähle einen der Angriffe des verteidigenden Pokémon. Dieses Pokémon kann diesen Angriff während des nächsten Zugs nicht einsetzen.",
				it: "Scegli uno degli attacchi del Pokémon Difensore. Quel Pokémon non potrà usare quell'attacco durante il prossimo turno del tuo avversario."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Doubleslap",
				fr: "Torgnoles",
				de: "Duplexhieb",
				it: "Doppiasberla"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt jedesmal, wenn die Münze 'Kopf' zeigt 30 Schadenspunkte zu.",
				it: "Lancia 2 volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa."
			},
			damage: "30x",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Amphibie, il peut vivre à l'air libre mais il doit rester mouillé pour survivre.",
		it: "Capace di vivere sia sulla terra che sott'acqua. Quando non è in acqua, suda in continuazione per mantenere lubrificato il suo corpo. LIV 28 N.61"
	},

	thirdParty: {
		cardmarket: 273733,
		tcgplayer: 42380
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
