import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Zubat",
		fr: "Nosferapti de la Team Rocket",
		de: "Team Rockets Zubat",
		it: "Zubat del Team Rocket",
		es: "Zubat del Team Rocket",
		pt: "Zubat da Equipe Rocket"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Poison Spray",
			fr: "Pulvérisation Toxique",
			de: "Giftspray",
			it: "Spruzzo Velenoso",
			es: "Aerosol Venenoso",
			pt: "Spray de Veneno"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado."
		}
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card