import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [303],
	set: Set,

	name: {
		'en-us': "Mawile",
		'fr-fr': "Mysdibule",
		'es-es': "Mawile",
		'it-it': "Mawile",
		'pt-br': "Mawile",
		'de-de': "Flunkifer"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Special Eater",
			'fr-fr': "Mangeur Spécial",
			'es-es': "Hambre Especial",
			'it-it': "Divoratore Speciale",
			'pt-br': "Devorador Especial",
			'de-de': "Spezial-Verkoster"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may discard a Special Energy from your opponent's Active Pokémon.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser une Énergie spéciale attachée au Pokémon Actif de votre adversaire.",
			'es-es': "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes descartar 1 Energía Especial del Pokémon Activo de tu rival.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi scartare un'Energia speciale dal Pokémon attivo del tuo avversario.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá descartar uma Energia Especial do Pokémon Ativo do seu oponente.",
			'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel legen."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Sharp Fang",
			'fr-fr': "Croc Aiguisé",
			'es-es': "Colmillo Afilado",
			'it-it': "Zannaffilata",
			'pt-br': "Presa Afiada",
			'de-de': "Scharfe Fänge"
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",
	illustrator: "Souichirou Gunjima",
	description: {
		'en-us': "It chomps with its gaping mouth. Its huge jaws are actually steel horns that have been transformed.",
	},
	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 720389,
				tcgplayer: 513428
			},
		},
		{
			type: "holo",
			stamp: ["set-logo", "staff"],
			thirdParty: {
				cardmarket: 761130,
				tcgplayer: 513429
			},
		}
	],
}

export default card
