import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Roserade",
		'fr-fr': "Roserade",
		'es-es': "Roserade",
		'it-it': "Roserade",
		'de-de': "Roserade",
		'pt-br': "Roserade",
		'ko-kr': "로즈레이드"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [407],
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Roselia"
	},

	description: {
		'en-us': "After captivating opponents with its sweet scent, it lashes them with its thorny whips.",
		'fr-fr': "Après avoir troublé les sens de ses adversaires\navec le parfum exquis de ses fleurs, il les frappe\nviolemment avec ses fouets ornés d'épines.",
		'es-es': "Aturde a los rivales con la fragancia de sus flores para\nluego azotarlos sin piedad con sus cepas espinosas.",
		'it-it': "Stordisce l'avversario con il profumo intenso dei suoi\nfiori e lo colpisce con le sue fruste piene di spine.",
		'de-de': "Mit dem süßlichen Duft seiner Blüten betört es\nseine Gegner, bevor es sie mit dornigen Ranken\nheftig auspeitscht.",
		'pt-br': "Depois de cativar seus oponentes com seu aroma doce,\ngolpeia-os com seus chicotes espinhosos.",
		'ko-kr': "향긋한 꽃향기로\n상대를 혼란스럽게 한 다음\n가시 채찍으로 세차게 때린다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Poisonous Whip",
			'fr-fr': "Fouet Empoisonné",
			'es-es': "Látigo Venenoso",
			'it-it': "Frustata Velenosa",
			'de-de': "Giftpeitsche",
			'pt-br': "Chicote Venenoso",
			'ko-kr': "독채찍"
		},

		damage: 50,
		cost: ["Grass", "Colorless"],

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
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["dialga", "palkia"]
}

export default card
