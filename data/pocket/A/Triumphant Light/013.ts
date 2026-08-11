import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Heatran",
		'fr-fr': "Heatran",
		'es-es': "Heatran",
		'it-it': "Heatran",
		'de-de': "Heatran",
		'pt-br': "Heatran",
		'ko-kr': "히드런"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [485],
	hp: 110,
	types: ["Fire"],

	description: {
		'en-us': "It dwells in volcanic caves. It digs in with its cross-shaped feet to crawl on ceilings and walls.",
		'fr-fr': "Il hante les grottes volcaniques. Il rampe au mur\net au plafond grâce à ses pieds en forme de croix.",
		'es-es': "Habita cuevas volcánicas. Cava con sus pies en\nforma de cruz para trepar por techos y paredes.",
		'it-it': "Vive nelle cavità dei vulcani. Scava con i suoi piedi\na croce per scalare pareti e arrampicarsi sui soffitti.",
		'de-de': "Es lebt in vulkanischen Höhlen. Mit seinen kreuzförmigen\nKlauen kann es sogar an der Decke laufen.",
		'pt-br': "Ele habita crateras vulcânicas. Ele escava com seus pés\nem forma de cruz para rastejar em telhados e paredes.",
		'ko-kr': "화산의 동굴에서 서식한다.\n십자형의 발톱을 박아서\n벽이나 천장을 돌아다닌다."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Speed Link",
			'fr-fr': "Lien Vitesse",
			'es-es': "Vínculo Veloz",
			'it-it': "Agilità Simbiotica",
			'de-de': "Tempokopplung",
			'pt-br': "Elo de Velocidade",
			'ko-kr': "스피드 링크"
		},

		effect: {
			'en-us': "If you have Arceus or Arceus ex in play, this Pokémon has no Retreat Cost.",
			'fr-fr': "Si vous avez Arceus ou Arceus-ex en jeu, ce Pokémon n'a aucun Coût de Retraite.",
			'es-es': "Si tienes a Arceus o Arceus ex en juego, este Pokémon no tiene ningún Coste de Retirada.",
			'it-it': "Se hai in gioco Arceus o Arceus-ex, questo Pokémon non ha costo di ritirata.",
			'de-de': "Wenn du Arceus oder Arceus-ex im Spiel hast, hat dieses Pokémon keine Rückzugskosten.",
			'pt-br': "Se você tiver Arceus ou Arceus ex em jogo, este Pokémon não terá custo de Recuo.",
			'ko-kr': "자신의 필드에 「아르세우스」 또는 「아르세우스 ex」 있다면 이 포켓몬의 후퇴에 필요한 에너지를 모두 없앤다."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Ragin' Mad Strike",
			'fr-fr': "Rage Furibonde",
			'es-es': "Golpe Furibundo",
			'it-it': "Colpo Furibondo",
			'de-de': "Tobender Wutangriff",
			'pt-br': "Golpe Cabeça Furiosa",
			'ko-kr': "대노봄버"
		},

		damage: "40+",
		cost: ["Fire", "Fire"],

		effect: {
			'en-us': "If this Pokémon has damage on it, this attack does 40 more damage.",
			'fr-fr': "Si ce Pokémon a subi des dégâts, cette attaque inflige 40 dégâts de plus.",
			'es-es': "Si este Pokémon ya tiene daño, este ataque hace 40 puntos de daño más.",
			'it-it': "Se questo Pokémon è danneggiato, questo attacco infligge 40 danni in più.",
			'de-de': "Wenn diesem Pokémon bereits Schaden zugefügt wurde, fügt diese Attacke 40 Schadenspunkte mehr zu.",
			'pt-br': "Se este Pokémon estiver danificado, este ataque causará 40 pontos de dano a mais.",
			'ko-kr': "이 포켓몬이 데미지를 받고 있다면 40데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 3
}

export default card
