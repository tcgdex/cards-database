import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ilima",
		'fr-fr': "Althéo",
		'es-es': "Liam",
		'it-it': "Liam",
		'de-de': "Elima",
		'pt-br': "Luan",
		'ko-kr': "일리마"
	},

	illustrator: "Teeziro",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "Put 1 of your {C} Pokémon that has damage on it into your hand.",
		'fr-fr': "Placez l'un de vos Pokémon {C} ayant subi des dégâts dans votre main.",
		'es-es': "Pon 1 de tus Pokémon {C} que ya tenga daño en tu mano.",
		'it-it': "Riprendi in mano uno dei tuoi Pokémon {C} danneggiati.",
		'de-de': "Nimm 1 deiner {C}-Pokémon, dem bereits Schaden zugefügt wurde, auf deine Hand.",
		'pt-br': "Coloque 1 dos seus Pokémon {C} que estiver danificado na sua mão.",
		'ko-kr': "데미지를 받고 있는 자신의 {C}포켓몬을 1마리 선택해서 패로 되돌린다."
	},

	trainerType: "Supporter",
	boosters: ["lunala"]
}

export default card
