import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Rapidash",
		fr: "Galopa",
		es: "Rapidash",
		it: "Rapidash",
		pt: "Rapidash",
		de: "Gallopa"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	evolveFrom: {
		en: "Ponyta",
		fr: "Ponyta",
		es: "Ponyta",
		it: "Ponyta",
		pt: "Ponyta",
		de: "Ponita"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Combustion",
			fr: "Fournaise",
			es: "Combustión",
			it: "Fuoco Continuo",
			pt: "Combustão",
			de: "Glühen"
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			en: "Ring of Fire",
			fr: "Anneau de Feu",
			es: "Anillo de Fuego",
			it: "Anello di Fuoco",
			pt: "Anel de Fogo",
			de: "Feuerring"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned. During your opponent's next turn, that Pokémon can't retreat.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas battre en retraite.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado. Durante o próximo turno do seu oponente, aquele Pokémon não poderá recuar.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt. Während des nächsten Zuges deines Gegners kann sich jenes Pokémon nicht zurückziehen."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card