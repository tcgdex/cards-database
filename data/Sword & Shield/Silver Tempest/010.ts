import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Lilligant",
		fr: "Fragilady de Hisui",
		es: "Lilligant de Hisui",
		it: "Lilligant di Hisui",
		pt: "Lilligant de Hisui",
		de: "Hisui-Dressella"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Petilil",
		fr: "Chlorobule",
		es: "Petilil",
		it: "Petilil",
		pt: "Petilil",
		de: "Lilminip"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Swelling Scent",
			fr: "Parfum Amplifiant",
			es: "Aroma Rebosante",
			it: "Aroma Amplificato",
			pt: "Aroma Abundante",
			de: "Duftschwall"
		},

		effect: {
			en: "Search your deck for up to 2 Grass Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie Grass, puis attachez-les à vos Pokémon de Banc comme il vous plaît. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía Grass y únelas a tus Pokémon en Banca de la manera que desees. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due carte Energia Grass e assegnale ai tuoi Pokémon in panchina nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 cartas de Energia Grass no seu baralho e ligue-as aos seus Pokémon no Banco como desejar. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 Grass-Energiekarten und lege sie beliebig an die Pokémon auf deiner Bank an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Spiral Kick",
			fr: "Coup'd Pied en Spirale",
			es: "Patada Espiral",
			it: "Spiralcalcio",
			pt: "Chute Espiral",
			de: "Drehtritt"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card