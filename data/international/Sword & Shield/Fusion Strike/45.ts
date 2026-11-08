import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [815],
	set: Set,

	name: {
		'en-us': "Cinderace VMAX",
		'fr-fr': "Pyrobut VMAX",
		'es-es': "Cinderace VMAX",
		'it-it': "Cinderace VMAX",
		'pt-br': "Cinderace VMAX",
		'de-de': "Liberlo VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Cinderace V",
		'fr-fr': "Pyrobut-V",
		'es-es': "Cinderace V",
		'it-it': "Cinderace-V",
		'pt-br': "Cinderace V",
		'de-de': "Liberlo-V"
	},

	stage: "VMAX",
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "G-Max Fireball",
			'fr-fr': "Pyroball G-Max",
			'de-de': "Giga-Brandball",
			'es-es': "Gigaesfera Ígnea",
			'pt-br': "Bola de Chamas G-Max",
			'it-it': "Gigafiammopalla"
		},

		damage: 230,

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned. During your next turn, this Pokémon can't attack.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé. Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt. Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado. Durante tu próximo turno, este Pokémon no puede atacar.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado. Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato. Durante il tuo prossimo turno, questo Pokémon non può attaccare."
		}
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582179,
				tcgplayer: 253170
			}
		},
	],
}

export default card
