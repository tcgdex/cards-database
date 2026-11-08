import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Electrode",
		'fr-fr': "Électrode",
		'de-de': "Lektrobal",
		'it-it': "Electrode"
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
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe",
		'it-it': "Voltorb"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Buzzap",
				'fr-fr': "Buzzap",
				'de-de': "Summzapp",
				'it-it': "Buzzap"
			},
			effect: {
				'en-us': "At any time during your turn (before your attack) you may Knock Out Electrode and attach it to 1 of your other Pokémon. If you do, chose a type of Energy. Electrode is now an Energy card (instead of a Pokémon) that provides 2 energy of that type. This power can't be used if Electrode is Asleep, Confused, or Paralyzed.",
				'fr-fr': "N'importe quand durant votre tour (avant votre attaque), vous pouvez mettre Électrode K.O. et l'attacher à 1 de vos autres Pokémon. Si vous le faites, choisissez un type d'Énergie. Électrode est maintenant une carte Énergie (au lieu d'un Pokémon) qui fournit 2 Énergies de ce type. Ce pouvoir ne peut être utilisé si Électrode est Endormi, Confus ou Paralysé.",
				'de-de': "Jederzeit während deines Zuges (vor Deinem Angriff) kannst Du Lektrobal kampfunfähig machenund auf eines Deiner Pokémon ablegen. Falls Du das tust, wähle einen Energietyp. Lektrobal ist eine Energiekarte (anstatt eines Pokémon), die 2 Energien dieses Typs liefert. Diese Fähigkeit kann nicxht eingesetzt werden, falls Lektrobal schlafend, verwirrt oder gelähmt ist.",
				'it-it': "Quante volte vuoi durante il tuo turno (prima di attaccare) puoi mettere Electrode K.O. e assegnarlo a un altro dei tuoi Pokémon. In questo caso, scegli un tipo di Energia. Electrode diventa una carta Energia (invece di un Pokémon) che vale due Energia di quel tipo. Questo potere non può essere usato se Electrode è Addormentato, Confuso o Paralizzato.",
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
				'en-us': "Electric Shock",
				'fr-fr': "Choc Électrique",
				'de-de': "Elektroschock",
				'it-it': "Scossa elettrica"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Electrode does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, Électrode s'inflige 10 dégâts.",
				'de-de': "Wirf eine Münze. Bei Zahl fügt Lektrobal sich selbst 10 Scahdenspunkte zu.",
				'it-it': "Lancia una moneta. Se esce croce, Electrode si infligge 10 danni."
			},
			damage: 50,

		},
	],

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273716,
				tcgplayer: 42362
			}
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107016
			}
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107016
			}
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
	retreat: 1,


	description: {
		'en-us': "It stores electrical energy under very high pressure. It often explodes with little or no provocation.",
		'fr-fr': "Il emmagasine des quantités énormes de courant électrique sous pression pouvant exploser.",
		'it-it': "Conserva energia elettrica sotto altissima pressione. Spesso esplode senza o con minima provocazione. LIV 40 N.102"
	}
}

export default card
