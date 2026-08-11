import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Victreebel",
		'fr-fr': "Empiflor",
		'es-es': "Victreebel",
		'it-it': "Victreebel",
		'de-de': "Sarzenia",
		'pt-br': "Victreebel",
		'ko-kr': "우츠보트"
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",

	dexId: [71],
	hp: 140,
	types: ["Grass"],
	stage: "Stage2",

	evolveFrom: {
		'en-us': "Weepinbell"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Fragrance Trap",
			'fr-fr': "Piège Parfumé",
			'es-es': "Trampa Fragancia",
			'it-it': "Trappola Aromatica",
			'de-de': "Aromafalle",
			'pt-br': "Armadilha Cheirosa",
			'ko-kr': "향기의 덫"
		},

		effect: {
			'en-us': "If this Pokémon is in the Active Spot, once during your turn, you may switch in 1 of your opponent's Benched Basic Pokémon to the Active Spot.",
			'fr-fr': "Si ce Pokémon est sur le Poste Actif, une fois pendant votre tour, vous pouvez échanger l'un des Pokémon de base sur le Banc de votre adversaire contre son Pokémon Actif.",
			'es-es': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes cambiar 1 de los Pokémon Básicos en Banca de tu rival por su Pokémon Activo.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi scambiare uno dei Pokémon Base nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du 1 Basis-Pokémon von der Bank deines Gegners in die Aktive Position einwechseln.",
			'pt-br': "Se este Pokémon estiver no Campo Ativo, uma vez durante o seu turno, você poderá mandar 1 dos Pokémon Básicos no Banco do seu oponente para o Campo Ativo.",
			'ko-kr': "이 포켓몬이 배틀필드에 있다면 자신의 차례에 1번 사용할 수 있다. 상대 벤치의 기본 포켓몬을 1마리 선택해서 배틀 포켓몬과 교체한다."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Vine Whip",
			'fr-fr': "Fouet Lianes",
			'es-es': "Látigo Cepa",
			'it-it': "Frustata",
			'de-de': "Rankenhieb",
			'pt-br': "Chicote de Vinha",
			'ko-kr': "덩굴채찍"
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	description: {
		'en-us': "Said to live in huge colonies deep in jungles, although no one has ever returned from there.",
		'fr-fr': "On dit qu'il vit en colonie dans la jungle,\nmais personne n'en est jamais revenu\nvivant pour le confirmer.",
		'es-es': "Dicen que vive en grandes colonias en el interior\nde las junglas, aunque nadie ha podido verificarlo.",
		'it-it': "Pare che viva in grandi colonie nel cuore della giungla,\nma nessuno è mai tornato da lì per raccontarlo.",
		'de-de': "Dieses Pokémon soll in großen Kolonien\ntief im Dschungel leben, doch niemand\nkann dies bestätigen.",
		'pt-br': "Diz-se que vivem em enormes colônias nas\nprofundezas das florestas, embora ninguém\njamais tenha conseguido voltar de lá.",
		'ko-kr': "정글의 안쪽에 우츠보트만\n있는 지대가 있어서\n한 번 가면 두 번 다시 돌아올 수 없다."
	},

	boosters: ["charizard"]
}

export default card
