import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Alakazam",
		'fr-fr': "Alakazam",
		'de-de': "Simsala",
		'it-it': "Alakazam"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		65,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Kadabra",
		'fr-fr': "Kadabra",
		'it-it': "Kadabra"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Damage Swap",
				'fr-fr': "Transfert de dégâts",
				'de-de': "Schadenstausch",
				'it-it': "Scambio danni"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another as long as you don't Knock Out that Pokémon. This power can't be used if Alakazam is Asleep, Confused, or Paralyzed.",
				'fr-fr': "Aussi souvent que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez déplacer 1 marqueur de dégâts depuis 1 de vos Pokémon vers un autre sous réserve de ne pas mettre ce Pokémon K.O. Ce pouvoir ne peut être utilisé si Alakazam est Endormi, Confus ou Paralysé.",
				'de-de': "Bist Du am Zug, kannst Du (vor Deinem Angriff) beliebig oft eine Schadensmarke von einem Deiner Pokémon auf ein anderes verschieben, solange Du dieses Pokémon nicht kampfunfähig machst. Diese Fähigkeit kann nicht eingesetzt werden, falls Simsala schlafend, verwirrt oder gelähmt ist.",
				'it-it': "Quante volte vuoi durante il tuo turno (prima di attaccare), puoi spostare un segnalino danno da uno dei tuoi Pokémon a un altro, a patto di non mettere K.O. quel Pokémonon. Questo potere non può essere usato se Alakazam è Addormentato, Confuso o Paralizzato."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Confuse Ray",
				'fr-fr': "Onde Folie",
				'de-de': "Konfustrahl",
				'it-it': "Storidiraggio"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon défenseur est maintenant Confus.",
				'de-de': "Wirf eine Münze bei \"Kopf\" ist das verteidigende Pokémon verwirrt",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon Difensore è Confuso."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273696,
				tcgplayer: 42346
			}
		},
		{
			type: "holo",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 106996
			}
		},
		{
			type: "holo",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 106996
			}
		},
		{
			type: "holo",
			subtype: "1999-2000-copyright",
		}
	],

	description: {
		'en-us': "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5000.",
		'fr-fr': "Son super cerveau peut effectuer des opérations plus rapidement qu'un super ordinateur. Il a un Q.I. de 5000.",
		'it-it': "Il suo cervello è più potente di un supercomputer. Dicono che abbia un quoziente di intelligenza di 5.000. LIV 42 N.65"
	},
}

export default card
