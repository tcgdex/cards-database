import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dangerous Laser",
		'fr-fr': "Laser Dangereux",
		'es-es': "Láser Peligroso",
		'it-it': "Laser Pericoloso",
		'pt-br': "Laser Perigoso",
		'de-de': "Gefährlicher Laser"
	},

	rarity: "ACE SPEC Rare",
	category: "Trainer",

	effect: {
		'en-us': "Your opponent's Active Pokémon is now Burned and Confused.",
		'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé et Confus.",
		'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido y Quemado.",
		'it-it': "Il Pokémon attivo del tuo avversario viene bruciato e confuso.",
		'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso e Queimado.",
		'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt und verwirrt."
	},

	trainerType: "Item",
	regulationMark: "H",


	illustrator: "inose yukie",

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 780954,
				tcgplayer: 560369
			}
		},
	],
}

export default card
