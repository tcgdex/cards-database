import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Suicune",
         ja: "suicune",
         fr: "Suicine",
         de: "Suicune",
         es: "Suicuna",
         it: "Suicune",
         pt: "Suicune",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [245],
      hp: 70,
      types: ["Water"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Crystal Body",
            ja: "クリスタルボディ",
            fr: "Corps cristallin",
            de: "Kristallkörper",
            es: "Cuerpo de cristal",
            it: "Corpo cristallino",
            pt: "Corpo cristalino",
          },
          effect: {
            en: "Prevent all effects of your opponent's attacks, other than damage, done to Suicune. This power stops working while Suicune is Asleep, Confused, or Paralyzed.",
            ja: "Suicuneに対して行われた損害以外の相手の攻撃のすべての影響を防ぎます。 Suicuneが眠っている、混乱し、麻痺している間、このパワーは機能しなくなります。",
            fr: "Empêchez tous les effets des attaques de votre adversaire, autres que les dégâts, faits à Suine. Ce pouvoir cesse de fonctionner pendant que Suine dort, confus ou paralysé.",
            de: "Verhindern Sie alle Auswirkungen der Angriffe Ihres Gegners, abgesehen von Schäden an Suicune. Diese Kraft hört auf, während Suicune schläft, verwirrt oder gelähmt ist.",
            es: "Prevenir todos los efectos de los ataques de tu oponente, aparte del daño, hechos a Suicune. Este poder deja de funcionar mientras Suicune está dormido, confundido o paralizado.",
            it: "Prevenire tutti gli effetti degli attacchi del tuo avversario, oltre al danno, fatto per suicuno. Questo potere smette di funzionare mentre Suicune è addormentato, confuso o paralizzato.",
            pt: "Evite todos os efeitos dos ataques do seu oponente, além de danos, causados ao Suicune. Esse poder para de funcionar enquanto Suicune está dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Water", "Water"],
          name: {
            en: "Aurora Wave",
            ja: "オーロラの波",
            fr: "Vague aurore",
            de: "Aurora -Welle",
            es: "Ola de aurora",
            it: "Aurora Wave",
            pt: "Onda de aurora",
          },
          effect: {
            en: "Flip 2 coins. If both are heads, the Defending Pokemon is now Paralyzed. If only 1 is heads, the Defending Pokemon is now Asleep.",
            ja: "2つのコインをフリップします。両方がヘッドである場合、防御するポケモンは現在麻痺しています。ヘッドが1つだけである場合、防御ポケモンは今眠っています。",
            fr: "Flip 2 pièces. Si les deux sont des têtes, le Pokémon en défense est maintenant paralysé. Si seulement 1 est la tête, le Pokémon en défense est maintenant endormi.",
            de: "2 Münzen umdrehen. Wenn beide Köpfe sind, ist das verteidigende Pokémon jetzt gelähmt. Wenn nur 1 Köpfe sind, schläft das verteidigende Pokémon jetzt.",
            es: "Flip 2 monedas. Si ambos son cabezas, el Pokémon defensor ahora está paralizado. Si solo 1 es cabezas, el Pokémon defensor ahora está dormido.",
            it: "Flip 2 monete. Se entrambi sono teste, il Pokemon in carica è ora paralizzato. Se solo 1 è la testa, il Pokemon in carica è ora addormentato.",
            pt: "Flip 2 moedas. Se ambos são cabeças, o Pokémon atual agora está paralisado. Se apenas 1 for cabeças, o pokemon defensor agora está dormindo.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
