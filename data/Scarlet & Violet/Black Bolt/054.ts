import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [543],
	set: Set,

	name: {
		en: "Venipede",
		fr: "Venipatte",
		de: "Toxiped",
		it: "Venipede",
		pt: "Venipede",
		es: "Venipede",
		'es-mx': "Venipede"
	},

	illustrator: "okayamatakatoshi",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Poison Spray",
			fr: "Pulvérisation Toxique",
			de: "Giftspray",
			it: "Spruzzo Velenoso",
			pt: "Spray de Veneno",
			es: "Aerosol Venenoso",
			'es-mx': "Aerosol Venenoso"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado."
		}
	}],

	retreat: 3,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836017
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836017
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836392
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836391
			}
		}
	]
}

export default card
