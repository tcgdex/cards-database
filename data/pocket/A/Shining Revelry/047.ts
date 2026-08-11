import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Paldean Wooper",
		'fr-fr': "Axolotode Paldea",
		'es-es': "Wooperde Paldea",
		'it-it': "Wooperdi Paldea",
		'de-de': "Paldea-Felino",
		'pt-br': "Wooperde Paldea",
		'ko-kr': "팔데아우파"
	},

	illustrator: "Mori Yuu",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [194],
	hp: 50,
	types: ["Darkness"],

	description: {
		'en-us': "After losing a territorial struggle, Wooper began living on land. The Pokémon changed over time, developing a poisonous film to protect its body.",
		'fr-fr': "Depuis qu'une dispute territoriale l'a contraint\nà vivre sur la terre ferme, il protège son corps\nen le recouvrant d'un fluide toxique.",
		'es-es': "Tras perder una disputa territorial, se vio forzado\na vivir en tierra firme y desarrolló una membrana\nmucosa tóxica con la que proteger su cuerpo.",
		'it-it': "Vive sulla terraferma da quando perse una\nlotta territoriale. Per proteggere il corpo ha\nsviluppato una membrana mucosa tossica.",
		'de-de': "Ein verlorener Revierkampf zwang es, an Land\nzu leben. Um sich zu schützen, entwickelte es\neine giftige Schleimschicht auf seinem Körper.",
		'pt-br': "Após perder uma disputa por território, Wooper passou a\nviver em terra firme. Seu corpo mudou ao longo do tempo,\ndesenvolvendo uma camada venenosa para protegê-lo.",
		'ko-kr': "영역 다툼에서 밀려 육지에 살게 되면서\n독성을 띠는 점막으로\n몸을 보호하도록 변화했다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Poison Jab",
			'fr-fr': "Direct Toxik",
			'es-es': "Puya Nociva",
			'it-it': "Velenpuntura",
			'de-de': "Gifthieb",
			'pt-br': "Golpe Envenenado",
			'ko-kr': "독찌르기"
		},

		damage: 10,
		cost: ["Darkness"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			
			'ko-kr': "상대의 배틀 포켓몬을 독으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card