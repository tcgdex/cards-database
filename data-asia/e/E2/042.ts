import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Hypno - 042/092",
         ja: "Hypno -042/092",
         fr: "Hypno - 042/092",
         de: "Hypno - 042/092",
         es: "Hypno - 042/092",
         it: "Hypno - 042/092",
         pt: "Hypno - 042/092",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [97],
      hp: 80,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Sleep Pendulum",
            ja: "睡眠振り子",
            fr: "Pendule de sommeil",
            de: "Schlafpendel",
            es: "Péndulo de sueño",
            it: "Pendolo per dormire",
            pt: "Pêndulo do sono",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, if Hypno is your Active Pokmon, you may make the Defending Pokmon Asleep. This power can't be used if Hypno is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前に）</em> </em>、催眠がアクティブなポケモンである場合、防御するポケモンを眠らせることができます。 Hypnoが特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, si Hypno est votre Pokémon actif, vous pouvez faire du pokemon en défense. Cette puissance ne peut pas être utilisée si l'hypno est affecté par une condition spéciale.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em>, wenn Hypno Ihr aktives Pokemon ist, können Sie das verteidigende Pokemon schlafend machen. Diese Kraft kann nicht verwendet werden, wenn Hypno von einer besonderen Erkrankung beeinflusst wird.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, si Hypno es su Pokémon activo, puede hacer que el Pokémon defensor se quede dormido. Esta potencia no se puede usar si Hypno se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, se Hypno è il tuo Pokemon attivo, puoi far addormentare il Pokemon in carica. Questo potere non può essere usato se Hypno è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, se o Hypno for o seu Pokémon ativo, você poderá fazer com que os Pokémon defesa dormem. Esse poder não pode ser usado se o Hypno for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
            en: "Spiral Aura",
            ja: "スパイラルオーラ",
            fr: "Aura de spirale",
            de: "Spiralaura",
            es: "Aura espiral",
            it: "Aura a spirale",
            pt: "Aura em espiral",
          },
          effect: {
            en: "If the Defending Pokemon isn't Knocked Out by the damage from this attack, you may choose 1 of your opponent's Benched Pokemon and switch the Defending Pokemon with it.",
            ja: "防御ポケモンがこの攻撃からのダメージによってノックアウトされていない場合、相手のベンチ付きポケモンの1つを選択し、防御ポケモンをそれで切り替えることができます。",
            fr: "Si le Pokémon en défense n'est pas éliminé par les dégâts de cette attaque, vous pouvez choisir 1 des pokemon bancés de votre adversaire et changer le Pokémon en défense avec.",
            de: "Wenn das verteidigende Pokémon durch den Schaden durch diesen Angriff nicht ausgeschaltet wird, können Sie 1 der Bankpokemon Ihres Gegners auswählen und das verteidigende Pokemon damit umschalten.",
            es: "Si el Pokémon defensor no se elimina por el daño de este ataque, puede elegir 1 de los Pokémon de banca de su oponente y cambiar el Pokémon defensor con él.",
            it: "Se il Pokemon in carica non viene eliminato dal danno da questo attacco, puoi scegliere 1 del Pokemon in panchina del tuo avversario e cambiare il Pokemon in carica con esso.",
            pt: "Se o Pokémon atual não for derrubado pelo dano desse ataque, você poderá escolher 1 do Pokémon em bancada do seu oponente e trocar o Pokémon defensivo com ele.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
