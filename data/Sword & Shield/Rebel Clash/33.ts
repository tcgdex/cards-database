import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Chandelure",
		fr: "Lugulabre",
		es: "Chandelure",
		it: "Chandelure",
		pt: "Chandelure",
		de: "Skelabra"
	},

	illustrator: "Taira Akitsu",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Lampent",
		fr: "Mélancolux"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Protective Glow",
				fr: "Lueur Protectrice",
				es: "Brillo Protector",
				it: "Lume Protettivo",
				pt: "Brilho Protetor",
				de: "Schützender Schein"
			},
			effect: {
				en: "All of your Pokémon that have Energy attached have no Weakness.",
				fr: "Vos Pokémon auxquels de l’Énergie est attachée n’ont pas de Faiblesse.",
				es: "Ninguno de tus Pokémon que tenga alguna Energía unida a él tiene Debilidad.",
				it: "Tutti i tuoi Pokémon che hanno delle Energie assegnate non hanno debolezza.",
				pt: "Todos os seus Pokémon que tenham Energia ligada a eles não têm Fraqueza.",
				de: "Alle deine Pokémon, an die Energie angelegt ist, haben keine Schwäche."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Mirage Flare",
				fr: "Mirage Flamboyant",
				es: "Destello Espejismo",
				it: "Miraggio Abbagliante",
				pt: "Miragem de Chamas",
				de: "Illusionsflackern"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 140,
	types: ["Fire"],
	regulationMark: "D"
}

export default card
