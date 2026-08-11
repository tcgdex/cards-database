import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hop's Cramorant",
		'fr-fr': "Nigosier de Nabil",
		'es-es': "Cramorant de Paul",
		'es-mx': "Cramorant de Paul",
		'de-de': "Hops Urgl",
		'it-it': "Cramorant di Hop",
		'pt-br': "Cramorant do Lupo"
	},

	illustrator: "Saboteri",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Fickle Spitting",
			'fr-fr': "Crachement Inconstant",
			'es-es': "Escupitajo Impredecible",
			'es-mx': "Escupitajo Impreciso",
			'de-de': "Wankelmütiges Spucken",
			'it-it': "Sputo Capriccioso",
			'pt-br': "Cusparada Errática"
		},

		effect: {
			'en-us': "If your opponent doesn't have exactly 3 or 4 Prize cards remaining, this attack does nothing.",
			'fr-fr': "S'il ne reste pas exactement 3 ou 4 cartes Récompense à votre adversaire, cette attaque ne fait rien.",
			'es-es': "Si a tu rival no le quedan exactamente 3 o 4 cartas de Premio, este ataque no hace nada.",
			'es-mx': "Si a tu rival no le quedan exactamente 3 o 4 cartas de Premio, este ataque no hace nada.",
			'de-de': "Wenn dein Gegner nicht genau 3 oder 4 verbleibende Preiskarten hat, hat diese Attacke keine Auswirkungen.",
			'it-it': "Se il tuo avversario non ha esattamente tre o quattro carte Premio rimanenti, questo attacco non ha effetto.",
			'pt-br': "Se o seu oponente não tiver exatamente 3 ou 4 cartas de Prêmio restantes, este ataque não fará nada."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "Cramorant instinctively swallow everything whole. They’re at their most formidable when they’re struggling to swallow overly large prey.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869788,
			tcgplayer: 675989
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 870412,
			tcgplayer: 676990
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870411,
			tcgplayer: 677130
		}
	},
],
}

export default card
