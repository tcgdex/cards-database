import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Porygon2",
		fr: "Porygon2 obscur",
		de: "Dunkles Porygon2"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		233,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Porygon",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Spatial Distortion",
				fr: "Distorsion spatiale",
				de: "Spatial Distortion"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, choose a Stadium card from your discard pile and put it into play. (If there's already a Stadium card in play, discard it.) This power can't be used if Dark Porygon2 is Asleep, Confused, or Paralyzed.",
				fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, choisissez une carte Stade dans votre pile de défausse et mettez-la en jeu. (S'il y a déjà une carte Stade en jeu, défaussez-vous en.) Ce pouvoir ne fonctionne pas si Porygon2 obscur est Endormi, Confus ou Paralysé.",
				de: "Once during your turn (before your attack), you may flip a coin. If heads, choose a Stadium card from your discard pile and put it into play. (If there's already a Stadium card in play, discard it.) This power can't be used if Dark Porygon2 is Asleep, Confused, or Paralyzed."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Curve Attack",
				fr: "Courbattaque",
				de: "Curve Attack"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done by attacks to Dark Porygon2 during your opponent's next turn. (Any other effects of attacks still happen.)",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les dégâts des attaques sur Porygon2 obscur pendant le prochain tour de votre adversaire. (Tous les autres effets dus à des attaques subsistent.)",
				de: "Flip a coin. If heads, prevent all damage done by attacks to Dark Porygon2 during your opponent's next turn. (Any other effects of attacks still happen.)"
			},
			damage: 20,

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
			value: "-30"
		},
	],

	description: {
		fr: "Les progrès de la technologie lui ont permis d'évoluer. Parfois, il affiche un comportement qui n'a pas été inclus dans sa programmation."
	},

	thirdParty: {
		cardmarket: 274660
	}
}

export default card
