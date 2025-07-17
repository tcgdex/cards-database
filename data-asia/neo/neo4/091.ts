import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Wigglytuff",
         ja: "ダークウィッグラット",
         fr: "Sombre wigglytuff",
         de: "Dunkler Wigglytuff",
         es: "Wigglytuff oscuro",
         it: "Wigglytuff scuro",
         pt: "Dark Wigglytuff",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [40],
      hp: 60,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Dark Song",
            ja: "暗い歌",
            fr: "Chanson sombre",
            de: "Dunkles Lied",
            es: "Canción oscura",
            it: "Canzone oscura",
            pt: "Música escura",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Asleep. If tails, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンは今眠っています。尾の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si la tête, le Pokémon en défense est maintenant endormi. Si Tails, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Köpfe, schläft das verteidigende Pokemon jetzt. Wenn Schwänze, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está dormido. Si Tails, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora addormentato. Se le code, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está dormindo. Se o cauda, o pokemon atual agora está confuso.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Slap Awake",
            ja: "目を覚まします",
            fr: "Gifle éveillée",
            de: "Wach schlagen",
            es: "Despierta",
            it: "Slap sveglio",
            pt: "Slap acordado",
          },
          effect: {
            en: "If the Defending Pokemon is Asleep or Confused, this attack does 20 damage plus 20 more damage. Then, the Defending Pokemon is no longer Asleep or Confused.",
            ja: "防御するポケモンが眠っているか混乱している場合、この攻撃は20ダメージに加えて20ダメージを与えます。その後、防御ポケモンはもはや眠っていないか混乱していません。",
            fr: "Si le Pokémon en défense est endormi ou confus, cette attaque fait 20 dégâts plus 20 dégâts supplémentaires. Ensuite, le Pokémon en défense n'est plus endormi ni confus.",
            de: "Wenn das verteidigende Pokémon schläft oder verwirrt ist, verursacht dieser Angriff 20 Schaden zuzüglich 20 weitere Schäden. Dann schläft das verteidigende Pokémon nicht mehr oder verwirrt.",
            es: "Si el Pokémon defensor está dormido o confundido, este ataque hace 20 daños más 20 más de daño. Entonces, el Pokémon defensor ya no está dormido o confundido.",
            it: "Se il Pokemon in carica è addormentato o confuso, questo attacco infligge 20 danni più 20 danni. Quindi, il Pokemon in difesa non è più addormentato o confuso.",
            pt: "Se o Pokémon atual estiver dormindo ou confuso, esse ataque causará 20 danos mais 20 danos. Então, o Pokémon atual não está mais dormindo ou confuso.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
