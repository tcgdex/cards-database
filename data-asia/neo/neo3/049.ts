import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Stantler",
         ja: "スタントラー",
         fr: "Stingler",
         de: "Stantler",
         es: "Stantler",
         it: "Stantler",
         pt: "Stantler",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [234],
      hp: 60,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Terrorize",
            ja: "恐怖",
            fr: "Terroriser",
            de: "Terrorisieren",
            es: "Aterrorizar",
            it: "Terrorizzare",
            pt: "Aterrorizar",
          },
          effect: {
            en: "If the Defending Pokemon is a Basic Pokemon, choose 1 of its attacks. That Pokemon can't use that attack during your opponent's next turn.",
            ja: "防御するポケモンが基本的なポケモンである場合、攻撃の1つを選択します。そのポケモンは、相手の次のターン中にその攻撃を使用できません。",
            fr: "Si le Pokémon en défense est un Pokémon de base, choisissez 1 de ses attaques. Ce Pokémon ne peut pas utiliser cette attaque lors du prochain tour de votre adversaire.",
            de: "Wenn das verteidigende Pokémon ein einfaches Pokémon ist, wählen Sie 1 seiner Angriffe. Dieses Pokemon kann diesen Angriff in der nächsten Runde Ihres Gegners nicht verwenden.",
            es: "Si el Pokémon defensor es un Pokémon básico, elija 1 de sus ataques. Ese Pokémon no puede usar ese ataque durante el próximo turno de tu oponente.",
            it: "Se il Pokemon in carica è un Pokemon di base, scegli 1 dei suoi attacchi. Quel Pokemon non può usare quell'attacco durante il prossimo turno del tuo avversario.",
            pt: "Se o Pokémon atual for um Pokémon básico, escolha 1 de seus ataques. Esse Pokémon não pode usar esse ataque durante o próximo turno do seu oponente.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Overhead Toss",
            ja: "オーバーヘッドトス",
            fr: "Tirage au sort",
            de: "Overhead Wurf",
            es: "Revoltijo",
            it: "Lancio sopra la testa",
            pt: "Arremesso aéreo",
          },
          effect: {
            en: "If you have any Benched Pokemon, flip a coin. If tails, this attack does 10 damage to 1 of them. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "ベンチ付きポケモンがある場合は、コインをひっくり返します。尾の場合、この攻撃はそれらの1つに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Si vous avez des pokemon bancés, retournez une pièce. Si Tails, cette attaque fait 10 dégâts à 1 d'entre eux. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wenn Sie ein Bank -Pokemon haben, drehen Sie eine Münze. Wenn Schwänze, schädigt dieser Angriff 10 von ihnen. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Si tienes algún Pokémon de banca, voltea una moneda. Si Tails, este ataque hace 10 daños a 1 de ellos. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Se hai dei Pokemon in panchina, capovolgi una moneta. Se code, questo attacco fa 10 danni a 1 di essi. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Se você tiver algum Pokémon em banco, vire uma moeda. Se caudas, esse ataque causa 10 danos a 1 deles. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
