import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Electrode",
		fr: "Électrode",
		de: "Lektrobal",
		it: "Electrode"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		101,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Voltorb",
		it: "Voltorb"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Buzzap",
				fr: "Buzzap",
				de: "Summzapp",
				it: "Buzzap"
			},
			effect: {
				en: "At any time during your turn (before your attack) you may Knock Out Electrode and attach it to 1 of your other Pokémon. If you do, chose a type of Energy. Electrode is now an Energy card (instead of a Pokémon) that provides 2 energy of that type. This power can't be used if Electrode is Asleep, Confused, or Paralyzed.",
				fr: "N'importe quand durant votre tour (avant votre attaque), vous pouvez mettre Électrode K.O. et l'attacher à 1 de vos autres Pokémon. Si vous le faites, choisissez un type d'Énergie. Électrode est maintenant une carte Énergie (au lieu d'un Pokémon) qui fournit 2 Énergies de ce type. Ce pouvoir ne peut être utilisé si Électrode est Endormi, Confus ou Paralysé.",
				de: "Jederzeit während deines Zuges (vor Deinem Angriff) kannst Du Lektrobal kampfunfähig machenund auf eines Deiner Pokémon ablegen. Falls Du das tust, wähle einen Energietyp. Lektrobal ist eine Energiekarte (anstatt eines Pokémon), die 2 Energien dieses Typs liefert. Diese Fähigkeit kann nicxht eingesetzt werden, falls Lektrobal schlafend, verwirrt oder gelähmt ist.",
				it: "Quante volte vuoi durante il tuo turno (prima di attaccare) puoi mettere Electrode K.O. e assegnarlo a un altro dei tuoi Pokémon. In questo caso, scegli un tipo di Energia. Electrode diventa una carta Energia (invece di un Pokémon) che vale due Energia di quel tipo. Questo potere non può essere usato se Electrode è Addormentato, Confuso o Paralizzato.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Electric Shock",
				fr: "Choc Électrique",
				de: "Elektroschock",
				it: "Scossa elettrica"
			},
			effect: {
				en: "Flip a coin. If tails, Electrode does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Électrode s'inflige 10 dégâts.",
				de: "Wirf eine Münze. Bei Zahl fügt Lektrobal sich selbst 10 Scahdenspunkte zu.",
				it: "Lancia una moneta. Se esce croce, Electrode si infligge 10 danni."
			},
			damage: 50,

		},
	],

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

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "Il emmagasine des quantités énormes de courant électrique sous pression pouvant exploser.",
		it: "Conserva energia elettrica sotto altissima pressione. Spesso esplode senza o con minima provocazione. LIV 40 N.102"
	},

	thirdParty: {
		cardmarket: 273716,
		tcgplayer: 42362
	},

	related: [
		{
			type: "translation",
			cardPath: "data-asia/PMCG/PMCG1/040.ts"
		}
	]
}

export default card
