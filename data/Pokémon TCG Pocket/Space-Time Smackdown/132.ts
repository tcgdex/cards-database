import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Starly",
		fr: "Étourmi",
		es: "Starly",
		it: "Starly",
		de: "Staralili",
		'pt-br': "Starly",
		ko: "찌르꼬"
	},

	illustrator: "Atsuko Nishida",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		en: "They flock around mountains and fields, chasing after bug Pokémon. Their singing is noisy and annoying.",
		fr: "Ils cherchent des Pokémon Insecte par monts et par\nvaux en grandes volées. Leur chant est très bruyant.",
		es: "Sobrevuela los campos en bandada buscando Pokémon\nde tipo Bicho. Chilla de forma muy estridente.",
		it: "Sorvola i campi in grandi stormi a caccia di Pokémon\nColeottero. Il suo canto è alquanto fastidioso.",
		de: "Auf der Suche nach Käfer-Pokémon fliegen Schwärme\nvon ihnen durchs Land. Ihr Ruf erzeugt großen Lärm.",
		'pt-br': "Juntam-se ao redor de montanhas e campos,\ncaçando Pokémon inseto. Seu canto é barulhento\ne irritante.",
		ko: "벌레포켓몬을 노리고 산과 들을\n많은 무리로 날아다닌다.\n울음소리가 무척 시끄럽다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Pluck",
			fr: "Picore",
			es: "Picoteo",
			it: "Spennata",
			de: "Pflücker",
			'pt-br': "Colher",
			ko: "쪼아대기"
		},

		damage: 20,
		cost: ["Colorless"],

		effect: {
			en: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
			fr: "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
			es: "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
			it: "Prima di infliggere danni, scarta tutti gli Oggetti Pokémon dal Pokémon attivo del tuo avversario.",
			de: "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners ab.",
			'pt-br': "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
			ko: "데미지를 주기 전에 상대의 배틀 포켓몬으로부터 「포켓몬의 도구」를 트래쉬한다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["palkia"]
}

export default card
