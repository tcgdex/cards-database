import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Rattata",
         ja: "ラッタタ",
         fr: "Rattata",
         de: "Rattata",
         es: "Rattata",
         it: "Rattata",
         pt: "Rattata",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [19],
      hp: 30,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Call for Friends",
            ja: "友達を呼びます",
            fr: "Appeler des amis",
            de: "Rufen Sie Freunde an",
            es: "Llamar a amigos",
            it: "Chiama per gli amici",
            pt: "Ligue para amigos",
          },
          effect: {
            en: "Search your deck for a Baby Pokemon or Basic Pokemon card and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack it your Bench is full.)",
            ja: "ベビーポケモンまたは基本的なポケモンカードを求めてデッキを検索し、ベンチに置きます。その後、デッキをシャッフルします。 （この攻撃を使用することはできませんそれはあなたのベンチがいっぱいです。）",
            fr: "Recherchez votre deck pour un bébé Pokémon ou une carte Pokémon de base et mettez-la sur votre banc. Mélanger votre deck par la suite. (Vous ne pouvez pas utiliser cette attaque, votre banc est plein.)",
            de: "Suchen Sie Ihr Deck nach einem Baby -Pokemon oder einer einfachen Pokemon -Karte und legen Sie es auf Ihre Bank. Mischen Sie anschließend Ihr Deck. (Sie können dies nicht verwenden, wenn Sie es angreifen. Ihre Bank ist voll.)",
            es: "Busque en su mazo un Pokémon Baby o una carta básica de Pokémon y póngala en su banco. Baraja tu mazo después. (No puedes usar este ataque, tu banco está lleno).",
            it: "Cerca nel tuo mazzo un pokemon per bambini o una carta Pokemon di base e mettilo in panchina. Shuffle il tuo mazzo in seguito. (Non puoi usare questo attacco, la tua panchina è piena.)",
            pt: "Pesquise seu baralho por um Pokémon para bebês ou um cartão Pokémon básico e coloque -o em seu banco. Afaste seu baralho depois. (Você não pode usar este ataque, seu banco está cheio.)",
          },
        },
        {
          cost: ["Colorless"],
          name: {
            en: "Body Slam",
            ja: "ボディスラム",
            fr: "Claquement de corps",
            de: "Body Slam",
            es: "Cañón de cuerpo",
            it: "Body Slam",
            pt: "Body Slam",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
