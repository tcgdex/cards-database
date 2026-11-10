import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Tentacool",
		fr: "Tentacool",
		it: "Tentacool",
		de: "Tentacha"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		72,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Cowardice",
				fr: "Échappée",
				it: "Sviqnarsela",
				de: "Rückmarsch"
			},
			effect: {
				en: "At any time during your turn (before your attack), you may return Tentacool to your hand. (Discard all cards attached to Tentacool.) This power can't be used the turn you put Tentacool into play or if Tentacool is Asleep, Confused, or Paralyzed.",
				fr: "À tout moment pendant votre tour (avant votre attaque), vous pouvez reprendre Tentacool dans votre main. (Défaussez toutes les cartes attachées à Tentacool.) Ce pouvoir ne peut être utilisé dans le tour où vous mettez Tentacool en jeu ou si Tentacool est Endormi, Confus ou Paralysé.",
				it: "In qualsiasi momento durante il tuo turno (prima del tuo attacco) puoi riprendere in mano Tentacool (scarta tutte le carte assegnate a Tentacool). Questo potere non può essere usato nello stesso turno in cui metti Tentacool in gioco e se Tentacool è Addormentato, Confuso o Paralizzato.",
				de: "Jederzeit während deines Zuges (vor deinem Angriff) kannst du Tentacha zurück auf deine Hand nehmen. (Lege alle auf Tentacha abgelegten Karten ab.) Diese Fähigkeit kann weder während des Zuges, in dem Tentacha ins Spiel kommt, noch wenn Tentacha schläft, verwirrt oder gelähmt ist, eingesetzt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Acid",
				fr: "Urticos",
				it: "Acido",
				de: "Säure"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		en: "Drifts in shallow seas. Anglers who hook them by accident are often punished by its stinging acid.",
		fr: "Flottant au bord des côtes, les pêcheurs se font souvent arroser d'acide quand ils en accrochent un.",
		it: "Vive nelle zone costiere. Gli sfortunati pescatori che per sbaglio lo catturano vengono colpiti dal suo doloroso acido.",
		de: "In flachen Gewässern anzutreffen. Angler, die sie versehentlich an der Leine haben, werden oft mit ihrer ätzenden Säure bestraft."
	},


	variants: [
		{
			type: "normal",
			subtype: "1999-2000-copyright",
			thirdParty: {
				cardmarket: 273917,
				tcgplayer: 44458
			}
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273917,
				tcgplayer: 44458
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273917,
				tcgplayer: 44458
			}
		},
	],
}

export default card
