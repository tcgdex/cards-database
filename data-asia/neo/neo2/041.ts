import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Houndoom",
         ja: "猟犬",
         fr: "Chouchou",
         de: "Houndoom",
         es: "Cebo",
         it: "Houndaom",
         pt: "Houndoom",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [229],
      hp: 70,
      types: ["Darkness"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Darkness", "Colorless", "Colorless"],
          name: {
            en: "Crunch",
            ja: "クランチ",
            fr: "Croquer",
            de: "Crunch",
            es: "Crujido",
            it: "Scricchiolio",
            pt: "Crunch",
          },
          effect: {
            en: "Until the end of your next turn, if an attack damages the Defending Pokemon (after applying Weakness and Resistance), that attack does 20 more damage to the Defending Pokemon.",
            ja: "次のターンの終わりまで、攻撃が防御ポケモンに損傷を与えた場合（脱力感と抵抗を適用した後）、その攻撃は防御ポケモンに20回以上のダメージを与えます。",
            fr: "Jusqu'à la fin de votre prochain tour, si une attaque endommage le Pokémon en défense (après avoir appliqué une faiblesse et une résistance), cette attaque fait 20 dommages supplémentaires au Pokémon en défense.",
            de: "Wenn ein Angriff das verteidigende Pokémon schädigt (nach der Anwendung von Schwäche und Widerstand), bis zum Ende Ihrer nächsten Kurve schadet dieser Angriff 20 weitere Schäden am verteidigenden Pokémon.",
            es: "Hasta el final de su próximo turno, si un ataque daña al Pokémon defensor (después de aplicar debilidad y resistencia), ese ataque hace 20 daños más al Pokémon defensor.",
            it: "Fino alla fine del turno successivo, se un attacco danneggia il Pokemon in difesa (dopo aver applicato la debolezza e la resistenza), quell'attacco fa altri 20 danni al Pokemon in difesa.",
            pt: "Até o final do seu próximo turno, se um ataque danificar o Pokémon atual (depois de aplicar fraqueza e resistência), esse ataque causa mais 20 danos ao Pokémon defensivo.",
          },
          damage: 30,
        },
        {
          cost: ["Fire", "Fire", "Colorless"],
          name: {
            en: "Flamethrower",
            ja: "火炎放射器",
            fr: "Lance-flammes",
            de: "Flammenwerfer",
            es: "Echador de llama",
            it: "Lanciafiamme",
            pt: "Lança -chamas",
          },
          effect: {
            en: "Discard 1 Fire Energy card attached to Houndoom or this attack does nothing.",
            ja: "ハウズームに取り付けられた1つの消防剤カードを捨てたり、この攻撃は何もしません。",
            fr: "Jetez 1 carte d'énergie d'incendie attachée à la chasse à la chasse ou cette attaque ne fait rien.",
            de: "Mit dem an Houndoom befestigten Brandenergie -Karte oder diesem Angriff entsorgen Sie nichts.",
            es: "Deseche 1 Tarjeta de energía de fuego unida a Hoodoom o este ataque no hace nada.",
            it: "Scartare 1 carta di energia antincendio attaccata a Houndaom o questo attacco non fa nulla.",
            pt: "Descarte 1 cartão de energia de incêndio anexado ao Houndoom ou esse ataque não faz nada.",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
