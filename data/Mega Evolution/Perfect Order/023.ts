import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Amaura",
		fr: "Amagara",
		es: "Amaura",
		de: "Amarino",
		it: "Amaura",
		pt: "Amaura"
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		698
	],
	hp: 100,
	types: [
		"Water"
	],
	stage: "Stage1",
	evolveFrom: {
		en: "Antique Sail Fossil",
		fr: "Fossile Nageoire Ancien",
		es: "Fósil Aleta Antiguo",
		de: "Antikes Flossenfossil",
		it: "Vecchio Fossilpinna",
		pt: "Fóssil de Vela Arcaico"
	},
	attacks: [
		{
			cost: [
				"Water",
				"Colorless"
			],
			name: {
				en: "Icy Wind",
				fr: "Vent Glace",
				es: "Viento Hielo",
				de: "Eissturm",
				it: "Ventogelato",
				pt: "Vento Congelante"
			},
			damage: "50",
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido."
			}
		}
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	retreat: 3,
	regulationMark: "J",
	illustrator: "Hitoshi Ariga",
	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],
	thirdParty: {
		tcgplayer: 684355,
		cardmarket: 877435
	}
}

export default card
