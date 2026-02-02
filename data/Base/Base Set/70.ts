import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Clefairy Doll",
		fr: "Peluche Mélofée",
		de: "Piepi-Puppe",
		it: "Clefairy Doll"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Trainer",
	set: Set,
	hp: 10,

	effect: {
		fr: "Jouez Peluche Mélofée comme un Pokémon de base. Lorsqu'il est en jeu, Peluche Mélofée compte comme un Pokémon (au lieu d'une carte Dresseur). Peluche Mélofée n'a pas d'attaque, ne peut pas battre en retraite, et ne peut pas être Endormi, Confus, Paralysé ou Empoisonné. Si Peluche Mélofée est mis K.O., il ne compte pas comme un Pokémon mis K.O. À tout moment pendant votre tour et avant votre attaque, vous pouvez défausser Peluche Mélofée.",
		de: "Spiele Piepi-Puppe, als ob es ein Basis-Pokémon wäre. Während Piepi-Puppe im Spiel ist, zählt es als Pokémon (anstatt einer Trainerkarte). Piepi-Puppe hat keine Angriffe, kann nicht schalfend, verwirrt, gelähmt oder vergiftet sein. Falls Piepi-Puppe kampfunfähig gemacht iwrd, zählt es nicht als kampfunfähig gemachtes Pokémon, jederzeit während Deines Zuges (vor Deinem Angriff) kannst Du Piepi-Puppe entfernen.",
		it: "Gioca questa carta come se fosse un Pokémon Base. Mentre è in gioco, Clefairy Doll conta come un Pokémon (non come una carta Addestramento). Clefairy Doll non ha attacchi, non può ritirarsi e non può essere Addormentato, Confuso, Paralizzato o Avvelenato. Se Clefairy Doll viene messo K.O., non conta come un Pokémon messo K.O. In qualsiasi momento durante il tuo turno, prima di attaccare, puoi scartare Clefairy Doll."
	},

	thirdParty: {
		cardmarket: 273765,
		tcgplayer: 42416
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
