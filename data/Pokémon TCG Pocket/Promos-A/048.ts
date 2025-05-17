import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Manaphy",
		fr: "Manaphy",
		es: "Manaphy",
		it: "Manaphy",
		de: "Manaphy",
		'pt-br': "Manaphy",
		ko: "마나피"
	},

	illustrator: "sui",
	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		en: "It is born with a wondrous power that lets it bond with any kind of Pokémon.",
		fr: "Il est né avec le pouvoir incroyable de créer\ndes liens avec n'importe quel Pokémon.",
		es: "Nace con un maravilloso poder que le permite\nestablecer vínculos con cualquier tipo de Pokémon.",
		it: "Dispone di un potere innato che lo fa\nlegare con qualsiasi specie di Pokémon.",
		de: "Es wird mit einer wundersamen Kraft geboren,\ndie eine Bindung zu jedem anderen Pokémon\nmöglich macht.",
		'pt-br': "Ele nasce com um poder extraordinário\nque o permite se ligar a qualquer tipo de Pokémon.",
		ko: "태어났을 때부터 가지고 있는\n이상한 힘을 쓰면 어떤 포켓몬과도\n마음이 서로 통하게 된다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Oceanic Gift",
			fr: "Cadeau de l'Océan",
			es: "Regalo Oceánico",
			it: "Dono del Mare",
			de: "Geschenk des Meeres",
			'pt-br': "Presente Oceânico",
			ko: "바다의소포"
		},

		cost: ["Water"],

		effect: {
			en: "Choose 2 of your Benched Pokémon. For each of those Pokémon, take a {W} Energy from your Energy Zone and attach it to that Pokémon.",
			fr: "Choisissez 2 de vos Pokémon de Banc. Pour chacun de ces Pokémon, prenez une Énergie {W} de votre zone Énergie et attachez-la à ce Pokémon.",
			es: "Elige 2 de tus Pokémon en Banca. Para cada uno de ellos, une 1 Energía {W} de tu área de Energía a ese Pokémon.",
			it: "Scegli 2 dei tuoi Pokémon in panchina e assegna un'Energia {W} dalla tua Zona Energia a ognuno di essi.",
			de: "Wähle 2 Pokémon auf deiner Bank. Lege für jedes jener Pokémon 1 {W}-Energie aus deinem Energiebereich an jene Pokémon an.",
			'pt-br': "Escolha 2 dos seus Pokémon no Banco. Para cada um daqueles Pokémon, pegue 1 Energia {W} da sua Zona de Energia e ligue-a àquele Pokémon.",
			ko: "자신의 벤치 포켓몬을 2마리 선택해서 에너지존에서 {W}에너지를 내보내 1개씩 붙인다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: []
}

export default card
