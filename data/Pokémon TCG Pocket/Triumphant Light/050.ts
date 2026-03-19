import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Crobat",
		fr: "Nostenfer",
		es: "Crobat",
		it: "Crobat",
		de: "Iksbat",
		'pt-br': "Crobat",
		ko: "크로뱃"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [169],
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		en: "Golbat"
	},

	description: {
		en: "Both of its legs have turned into wings. Without a sound, Crobat flies swiftly toward its prey and sinks its fangs into the nape of its target's neck.",
		fr: "Ses pattes sont devenues des ailes.\nIl fond sur sa proie furtivement puis\nplante ses crocs dans sa nuque.",
		es: "Sus patas se han convertido en alas. Se lanza\nsobre su presa en un vuelo silencioso a alta\nvelocidad y le clava los colmillos en la nuca.",
		it: "Le due zampe si sono mutate in ali. Vola verso\nla preda ad alta velocità senza fare alcun\nrumore e le affonda le zanne nella nuca.",
		de: "Seine zwei Beine wurden zu Flügeln. Es fliegt\nschnell und lautlos zu seiner Beute, um ihr dann\ndie Zähne in den Nacken zu bohren.",
		'pt-br': "Suas duas pernas se transformaram em asas.\nSilenciosamente, Crobat voa de forma ágil em direção\nà sua presa e afunda seus dentes na nuca de seu alvo.",
		ko: "양발이 날개로 변화했다.\n소리를 내지 않고 고속으로 날아\n먹이의 목덜미에 이빨을 꽂는다."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Cunning Link",
			fr: "Lien Malice",
			es: "Vínculo Astuto",
			it: "Astuzia Simbiotica",
			de: "Trickkopplung",
			'pt-br': "Elo de Traquinagem",
			ko: "트릭 링크"
		},

		effect: {
			en: "Once during your turn, if you have Arceus or Arceus ex in play, you may do 30 damage to your opponent's Active Pokémon.",
			fr: "Une fois pendant votre tour, si vous avez Arceus ou Arceus-ex en jeu, vous pouvez infliger 30 dégâts au Pokémon Actif de votre adversaire.",
			es: "Una vez durante tu turno, si tienes a Arceus o Arceus ex en juego, puedes hacer 30 puntos de daño al Pokémon Activo de tu rival.",
			it: "Una sola volta durante il tuo turno, se hai in gioco Arceus o Arceus-ex, puoi infliggere 30 danni al Pokémon attivo del tuo avversario.",
			de: "Wenn du Arceus oder Arceus-ex im Spiel hast, kannst du einmal während deines Zuges dem Aktiven Pokémon deines Gegners 30 Schadenspunkte zufügen.",
			'pt-br': "Uma vez durante o seu turno, se você tiver Arceus ou Arceus ex em jogo, você poderá causar 30 pontos de dano ao Pokémon Ativo do seu oponente.",
			ko: "자신의 필드에 「아르세우스」 또는 「아르세우스 ex」 있다면 자신의 차례에 1번 사용할 수 있다. 상대의 배틀 포켓몬에게 30데미지를 준다."
		}
	}],

	attacks: [{
		name: {
			en: "Darkness Fang",
			fr: "Croc Obscur",
			es: "Colmillo de Oscuridad",
			it: "Oscurizanna",
			de: "Fänge der Dunkelheit",
			'pt-br': "Presa Sombria",
			ko: "어둠엄니"
		},

		damage: 50,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 0
}

export default card
