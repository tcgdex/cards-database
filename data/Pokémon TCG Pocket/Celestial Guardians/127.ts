import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Kommo-o",
		fr: "Ékaïser",
		es: "Kommo-o",
		it: "Kommo-o",
		de: "Grandiras",
		'pt-br': "Kommo-o",
		ko: "짜랑고우거"
	},

	illustrator: "hatachu",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Dragon"],

	evolveFrom: {
		en: "Hakamo-o"
	},

	description: {
		en: "It clatters its tail scales to unnerve opponents. This Pokémon will battle only those who stand steadfast in the face of this display.",
		fr: "Quand il rencontre un ennemi, il fait sonner les\nécailles de sa queue pour l'intimider. Il n'affronte\nque ceux qui ne se laissent pas impressionner.",
		es: "Al encontrarse con un enemigo, hace sonar las\nescamas de su cola para intimidarlo. Solamente\nlucha contra aquellos que no se acobardan.",
		it: "Quando si imbatte in un nemico, fa risuonare le squame della\ncoda per spaventarlo. Lotta solo contro chi non si lascia intimorire.",
		de: "Trifft es auf einen Gegner, rasselt es drohend mit\nseinen Schwanzschuppen. Nur wenn dieser davon\nunbeeindruckt bleibt, kämpft es mit ihm.",
		'pt-br': "Bate as escamas da cauda para perturbar seus oponentes.\nEste Pokémon só batalha contra aqueles que não\nse deixam abalar por essa demonstração.",
		ko: "상대와 마주치면 꼬리의 비늘로\n소리를 내어 위협한다. 이에 겁먹지 않은\n강자만을 상대로 싸운다."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Clanging Scales",
			fr: "Vibrécaille",
			es: "Fragor Escamas",
			it: "Clamorsquame",
			de: "Schuppenrasseln",
			'pt-br': "Batida de Escamas",
			ko: "스케일노이즈"
		},

		damage: 130,
		cost: ["Lightning", "Fighting"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes +30 damage from attacks.",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit + 30 dégâts provenant des attaques.",
			es: "Durante el próximo turno de tu rival, los ataques hacen 30+30 puntos[/Ctrl:NoBreak] de daño a este Pokémon.",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce +30 danni dagli attacchi.",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken + 30 Schadenspunkte zugefügt.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá +30 pontos de dano de ataques.",
			ko: "상대의 다음 차례에 이 포켓몬이 받는 기술의 데미지를 +30한다."
		}
	}],

	retreat: 2,
	boosters: ["lunala"]
}

export default card
