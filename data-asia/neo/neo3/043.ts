import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Murkrow",
         ja: "マークロウ",
         fr: "Sobre",
         de: "Murkrow",
         es: "Turbio",
         it: "Murkrow",
         pt: "MURKROW",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [198],
      hp: 40,
      types: ["Darkness"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Call for Family",
            ja: "家族を呼びます",
            fr: "Appel à la famille",
            de: "Rufen Sie nach Familie",
            es: "Llamar a la familia",
            it: "Chiama per la famiglia",
            pt: "Ligue para a família",
          },
          effect: {
            en: "Search your deck for a Basic Pokemon card named Murkrow and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
            ja: "Murkrowという名前の基本的なポケモンカードをデッキに検索し、ベンチに置いてください。その後、デッキをシャッフルします。 （ベンチがいっぱいの場合、この攻撃を使用できません。）",
            fr: "Recherchez votre jeu une carte Pokémon de base nommée Murkrow et mettez-la sur votre banc. Mélanger votre deck par la suite. (Vous ne pouvez pas utiliser cette attaque si votre banc est plein.)",
            de: "Suchen Sie Ihr Deck nach einer einfachen Pokemon -Karte namens Murkrow und legen Sie es auf Ihre Bank. Mischen Sie anschließend Ihr Deck. (Sie können diesen Angriff nicht verwenden, wenn Ihre Bank voll ist.)",
            es: "Busque en su mazo una tarjeta Pokémon básica llamada Murkrow y póngala en su banco. Baraja tu mazo después. (No puedes usar este ataque si tu banco está lleno).",
            it: "Cerca nel tuo mazzo una carta Pokemon di base chiamata Murkrow e mettila sulla panchina. Shuffle il tuo mazzo in seguito. (Non puoi usare questo attacco se la tua panchina è piena.)",
            pt: "Pesquise seu baralho por um cartão Pokemon básico chamado Murkrow e coloque -o em seu banco. Afaste seu baralho depois. (Você não pode usar este ataque se o seu banco estiver cheio.)",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Flock Attack",
            ja: "群れ攻撃",
            fr: "Attaque de troupeau",
            de: "Herdenangriff",
            es: "Ataque",
            it: "Attacco di gregge",
            pt: "Ataque de rebanho",
          },
          effect: {
            en: "Flip a number of coins equal to the number of Murkrows on your Bench. This attack does 10 damage plus 10 more damage for each heads.",
            ja: "ベンチのMurkrowsの数に等しい数のコインをひっくり返します。この攻撃は、10ダメージに加えて、各ヘッドに対してさらに10ダメージを与えます。",
            fr: "Retournez un certain nombre de pièces égales au nombre de Murkrows sur votre banc. Cette attaque fait 10 dégâts plus 10 dégâts supplémentaires pour chaque tête.",
            de: "Drehen Sie eine Reihe von Münzen um, die der Anzahl der Murkrows auf Ihrer Bank entsprechen. Dieser Angriff verursacht 10 Schäden plus 10 weitere Schäden für jeden Köpfe.",
            es: "Voltee una serie de monedas igual al número de Murkrows en su banco. Este ataque hace 10 daños más 10 daños más para cada cabezal.",
            it: "Capovolgi un numero di monete pari al numero di morti sulla panchina. Questo attacco infligge 10 danni più 10 danni in più per ogni teste.",
            pt: "Vire uma série de moedas iguais ao número de murkrows em seu banco. Este ataque causa 10 danos mais 10 mais danos para cada cabeça.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
