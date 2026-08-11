import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Spicy Seasoned Curry",
		'fr-fr': "Curry Épicé aux Piments",
		'es-es': "Curri Picante Especiado",
		'it-it': "Curry piccante alle spezie",
		'pt-br': "Curry Temperado e Apimentado",
		'de-de': "Scharfes Gewürzcurry"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Your Active Pokémon is now Burned. Heal 40 damage from it.",
		'fr-fr': "Votre Pokémon Actif est maintenant Brûlé. Soignez 40 dégâts de ce Pokémon.",
		'es-es': "Tu Pokémon Activo pasa a estar Quemado. Cúrale 40 puntos de daño.",
		'it-it': "Il tuo Pokémon attivo viene bruciato. Curalo da 40 danni.",
		'pt-br': "O seu Pokémon Ativo agora está Queimado. Cure 40 pontos de dano dele.",
		'de-de': "Dein Aktives Pokémon ist jetzt verbrannt. Heile 40 Schadenspunkte bei jenem Pokémon."
	},

	trainerType: "Item",
	regulationMark: "E",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658812,
				tcgplayer: 272403
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658812,
				tcgplayer: 272403
			}
		},
	],
}

export default card
