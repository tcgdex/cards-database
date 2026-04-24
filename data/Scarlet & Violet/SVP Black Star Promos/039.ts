import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [303],
	set: Set,

	name: {
		en: "Mawile",
		fr: "Mysdibule",
		es: "Mawile",
		it: "Mawile",
		pt: "Mawile",
		de: "Flunkifer"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Special Eater",
			fr: "Mangeur Spécial",
			es: "Hambre Especial",
			it: "Divoratore Speciale",
			pt: "Devorador Especial",
			de: "Spezial-Verkoster"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may discard a Special Energy from your opponent's Active Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser une Énergie spéciale attachée au Pokémon Actif de votre adversaire.",
			es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes descartar 1 Energía Especial del Pokémon Activo de tu rival.",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi scartare un'Energia speciale dal Pokémon attivo del tuo avversario.",
			pt: "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá descartar uma Energia Especial do Pokémon Ativo do seu oponente.",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel legen."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Sharp Fang",
			fr: "Croc Aiguisé",
			es: "Colmillo Afilado",
			it: "Zannaffilata",
			pt: "Presa Afiada",
			de: "Scharfe Fänge"
		},

		damage: 90
	}],

	retreat: 1,
	regulationMark: "G",
	illustrator: "Souichirou Gunjima"
}

export default card