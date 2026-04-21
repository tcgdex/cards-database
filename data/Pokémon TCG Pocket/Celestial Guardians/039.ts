import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Sandslash",
		fr: "Sablaireaud'Alola",
		es: "Sandslashde Alola",
		it: "Sandslashdi Alola",
		de: "Alola-Sandamer",
		'pt-br': "Sandslashde Alola",
		ko: "알로라고지"
	},

	illustrator: "Hasuno",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [28],
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		en: "Alolan Sandshrew"
	},

	description: {
		en: "It uses large, hooked claws to cut a path through deep snow as it runs. On snowy mountains, this Sandslash is faster than any other Pokémon.",
		fr: "Il court en se frayant un passage dans la neige\nde ses grandes griffes. Sur les monts enneigés,\naucun Pokémon ne surpasse sa vitesse.",
		es: "Sus enormes garras le permiten abrirse camino\npor la nieve que cubre su hábitat y recorrerlo a\nmayor velocidad que ningún otro Pokémon.",
		it: "Corre piantando saldamente nella neve i suoi grandi artigli.\nCiò lo rende il Pokémon più veloce sui monti innevati.",
		de: "Mit seinen großen Krallen gräbt es sich flink\ndurch den Schnee. In verschneiten Gebirgen\nist es schneller als jedes andere Pokémon.",
		'pt-br': "Quando corre pela neve, abre o caminho com suas garras\ngrandes e afiadas em forma de gancho. Em montanhas\nnevadas, este Sandslash é o mais rápido dos Pokémon.",
		ko: "커다란 갈고리발톱으로 높이 쌓인\n눈을 헤치며 달린다. 설산에서는\n어떤 포켓몬보다 빠르다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Spike Armor",
			fr: "Armure Piquante",
			es: "Armadura de Espinas",
			it: "Corazza Ispida",
			de: "Stachelpanzer",
			'pt-br': "Armadura de Espinhos",
			ko: "가시갑옷"
		},

		damage: 20,
		cost: ["Water"],

		effect: {
			en: "During your opponent's next turn, if this Pokémon is damaged by an attack, do 40 damage to the Attacking Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque, le Pokémon Attaquant subit 40 dégâts.",
			es: "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque, el Pokémon Atacante sufre 40 puntos de daño.",
			it: "Durante il prossimo turno del tuo avversario, se questo Pokémon viene danneggiato da un attacco, il Pokémon attaccante subisce 40 danni.",
			de: "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch eine Attacke Schaden zugefügt wird, füge dem Angreifenden Pokémon 40 Schadenspunkte zu.",
			'pt-br': "Durante o próximo turno do seu oponente, se este Pokémon for danificado por um ataque, cause 40 pontos de dano ao Pokémon Atacante.",
			ko: "상대의 다음 차례에 이 포켓몬이 기술의 데미지를 받았을 때 기술을 사용한 포켓몬에게 40데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo", "lunala"]
}

export default card