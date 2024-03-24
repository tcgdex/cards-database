import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Mime Jr.",
		fr: "Mime Jr.",
		es: "Mime Jr.",
		it: "Mime Jr.",
		pt: "Mime Jr.",
		de: "Pantimimi"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Mimed Games",
			fr: "Jeux Mimés",
			es: "Juegos Mímicos",
			it: "Giochi Mimici",
			pt: "Jogos Miméticos",
			de: "Mimenspiele"
		},

		effect: {
			en: "Your opponent chooses an attack from 1 of their Pokémon in play. Use the chosen attack as this attack.",
			fr: "Votre adversaire choisit une attaque de l'un de ses Pokémon en jeu. Utilisez l'attaque choisie en tant que cette attaque.",
			es: "Tu rival elige un ataque de uno de sus Pokémon en juego. Usa el ataque elegido para este ataque.",
			it: "Il tuo avversario sceglie un attacco di uno dei suoi Pokémon in gioco. Usalo al posto di questo attacco.",
			pt: "Seu oponente escolhe um ataque de 1 dos Pokémon dele em jogo. Use o ataque escolhido como este ataque.",
			de: "Dein Gegner wählt 1 Attacke von 1 seiner Pokémon im Spiel. Setze die gewählte Attacke als diese Attacke ein."
		}
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card