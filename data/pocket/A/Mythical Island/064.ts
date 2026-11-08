import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pokémon Flute",
		'fr-fr': "Flûte Pokémon",
		'es-es': "Pokéflauta",
		'it-it': "Pokéflauto",
		'de-de': "Pokémon-Flöte",
		'pt-br': "Flauta Pokémon",
		'ko-kr': "포켓몬피리"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'en-us': "Put a Basic Pokémon from your opponent's discard pile onto their Bench.",
		'fr-fr': "Placez un Pokémon de base de la pile de défausse de votre adversaire sur son Banc.",
		'es-es': "Pon 1 Pokémon Básico de la pila de descartes de tu rival en su Banca.",
		'it-it': "Prendi un Pokémon Base dalla pila degli scarti del tuo avversario e mettilo nella sua panchina.",
		'de-de': "Lege 1 Basis-Pokémon aus dem Ablagestapel deines Gegners auf seine Bank.",
		'pt-br': "Coloque 1 Pokémon Básico da pilha de descarte do seu oponente no Banco dele.",
		'ko-kr': "상대의 트래쉬에서 기본 포켓몬을 1장 선택해서 상대의 벤치로 내보낸다."
	},

	trainerType: "Item",
	rarity: "Two Diamond"
}

export default card
