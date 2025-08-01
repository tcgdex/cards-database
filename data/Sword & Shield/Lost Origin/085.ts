import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [62],
	set: Set,

	name: {
		en: "Poliwrath",
		fr: "Tartard",
		es: "Poliwrath",
		it: "Poliwrath",
		pt: "Poliwrath",
		de: "Quappo"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	evolveFrom: {
		en: "Poliwhirl",
		fr: "Têtarte",
		es: "Poliwhirl",
		it: "Poliwhirl",
		pt: "Poliwhirl",
		de: "Quaputzi"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Split Spiral Punch",
			fr: "Coup d'Poing en Demi Spirale",
			es: "Puño en Espiral Cortante",
			it: "Spiralpugno Squarciante",
			pt: "Soco Espiral Dividido",
			de: "Spiralhieb"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 60
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Splash Loop",
			fr: "Boucle Éclaboussure",
			es: "Bucle Salpicadura",
			it: "Circuito Splash",
			pt: "Borrifada em Loop",
			de: "Platscherschleife"
		},

		effect: {
			en: "Put 2 Energy attached to this Pokémon into your hand.",
			fr: "Ajoutez à votre main 2 Énergies attachées à ce Pokémon.",
			es: "Pon 2 Energías unidas a este Pokémon en tu mano.",
			it: "Prendi due Energie assegnate a questo Pokémon e aggiungile alle carte che hai in mano.",
			pt: "Coloque 2 Energias ligadas a este Pokémon na sua mão.",
			de: "Nimm 2 an dieses Pokémon angelegte Energien auf deine Hand."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674098
	}
}

export default card