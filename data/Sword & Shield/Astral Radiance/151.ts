import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Spicy Seasoned Curry",
		fr: "Curry Épicé aux Piments",
		es: "Curri Picante Especiado",
		it: "Curry piccante alle spezie",
		pt: "Curry Temperado e Apimentado",
		de: "Scharfes Gewürzcurry"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Your Active Pokémon is now Burned. Heal 40 damage from it.",
		fr: "Votre Pokémon Actif est maintenant Brûlé. Soignez 40 dégâts de ce Pokémon.",
		es: "Tu Pokémon Activo pasa a estar Quemado. Cúrale 40 puntos de daño.",
		it: "Il tuo Pokémon attivo viene bruciato. Curalo da 40 danni.",
		pt: "O seu Pokémon Ativo agora está Queimado. Cure 40 pontos de dano dele.",
		de: "Dein Aktives Pokémon ist jetzt verbrannt. Heile 40 Schadenspunkte bei jenem Pokémon."
	},

	trainerType: "Item",
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card