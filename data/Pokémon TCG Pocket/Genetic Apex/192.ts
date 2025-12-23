import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Fearow",
		fr: "Rapasdepic",
		es: "Fearow",
		it: "Fearow",
		de: "Ibitak",
		'pt-br': "Fearow",
		ko: "깨비드릴조"
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",

	dexId: [22],
	hp: 100,
	types: ["Colorless"],
	stage: "Stage1",

	evolveFrom: {
		en: "Spearow"
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Drill Run",
			fr: "Tunnelier",
			es: "Taladradora",
			it: "Giravvita",
			de: "Schlagbohrer",
			'pt-br': "Furação",
			ko: "드릴라이너"
		},

		effect: {
			en: "Flip a coin. If heads, discard a random Energy from your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez au hasard une Énergie du Pokémon Actif de votre adversaire.",
			es: "Lanza 1 moneda. Si sale cara, descarta 1 Energía aleatoria del Pokémon Activo de tu rival.",
			it: "Lancia una moneta. Se esce testa, rimuovi un'Energia a caso dal Pokémon attivo del tuo avversario.",
			de: "Wirf 1 Münze. Lege bei Kopf 1 zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
			'pt-br': "Jogue uma moeda. Se sair cara, descarte 1 Energia aleatória do Pokémon Ativo do seu oponente.",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬에서 에너지를 랜덤으로 1개 트래쉬한다."
		},

		damage: "50"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "Carrying food through Fearow's territory is dangerous. It will snatch the food away from you in a flash!",
		fr: "Si vous vous promenez sur le territoire\nd'un Rapasdepic en transportant de la nourriture,\nvous risquez de vite la voir s'envoler !",
		es: "Es peligroso pasear con comida por su\nterritorio, ya que supone exponerse a que en\ncualquier momento se abalance para robarla.",
		it: "Chi attraversa il suo territorio portando\ncon sé del cibo corre il rischio di vederselo\nstrappare via in men che non si dica.",
		de: "Wer Essbares dabeihat, sollte sich nicht in\nIbitaks Revier begeben, da sonst ein Überfall\naus heiterem Himmel droht.",
		'pt-br': "Transportar alimento através do território\nde Fearow é perigoso, porque este Pokémon\nroubará a comida em um instante!",
		ko: "깨비드릴조 영역에서 음식을\n갖고 다니는 것은 위험하다.\n순식간에 빼앗긴다."
	},

	boosters: ["charizard"]
}

export default card
