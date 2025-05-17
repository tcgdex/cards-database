import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Mow Rotom",
		fr: "Motisma Tonte",
		es: "Rotom Corte",
		it: "Rotom Taglio",
		de: "Schneid-Rotom",
		'pt-br': "Rotom Corte",
		ko: "커트로토무"
	},

	illustrator: "kawayoo",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		en: "The lawn mower is one of the household appliances that led to the development of the Rotom Dex.",
		fr: "La tondeuse à gazon est l'un des appareils électroménagers\nqui ont permis la création du Motisma-Dex.",
		es: "El cortacésped es uno de los aparatos que\nimpulsaron el desarrollo de la RotomDex.",
		it: "Il tagliaerba è uno degli elettrodomestici che hanno\nreso possibile la creazione del Pokédex Rotom.",
		de: "Der Rasenmäher ist eines der elektrischen\nHaushaltsgeräte, die zur Entwicklung des\nRotom-Pokédex führten.",
		'pt-br': "O cortador de grama é um dos eletrodomésticos\nque levaram ao desenvolvimento do Pokédex Rotom.",
		ko: "로토무도감이 만들어진\n계기가 된 가전제품 중 하나가\n바로 잔디깎이였다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Energy Cutoff",
			fr: "Coupure d'Énergie",
			es: "Corte de Energía",
			it: "Calopotenza",
			de: "Energiesperre",
			'pt-br': "Corte de Energia",
			ko: "에너지커트"
		},

		damage: 30,
		cost: ["Grass", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, discard a random Energy from your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez au hasard une Énergie du Pokémon Actif de votre adversaire.",
			es: "Lanza 1 moneda. Si sale cara, descarta 1 Energía aleatoria del Pokémon Activo de tu rival.",
			it: "Lancia una moneta. Se esce testa, rimuovi un'Energia a caso dal Pokémon attivo del tuo avversario.",
			de: "Wirf 1 Münze. Lege bei Kopf 1 zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
			'pt-br': "Jogue uma moeda. Se sair cara, descarte 1 Energia aleatória do Pokémon Ativo do seu oponente.",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬에서 에너지를 랜덤으로 1개 트래쉬한다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga", "palkia"]
}

export default card
